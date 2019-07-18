import { Action } from "redux";

export interface IActionCreatorProps<TActionFields> {
    is(action: Action): action is Action & TActionFields;
    type: string;
    typeInterface: TActionFields & Action;
}

export interface IActionCreator<TParams, TActionFields = TParams> extends IActionCreatorProps<TActionFields> {
    (params?: TParams): Action & TActionFields;
}

export function defineAction<TActionFields = {}>(
    type: string | { type: string; subtype: string },
    defaults?: Partial<TActionFields>
): IActionCreator<TActionFields, TActionFields> {
    return defineActionFactory<TActionFields, TActionFields>(type, fields => ({
        ...(defaults || ({} as any)),
        ...(fields as any)
    }));
}

export function defineActionFactory<TParams, TActionFields = TParams>(
    type: string | { type: string; subtype: string },
    factory: (params: TParams) => TActionFields
): IActionCreator<TParams, TActionFields> {
    type = typeof type === "string" ? generateActionType(type, "") : generateActionType(type.type, type.subtype);

    const creator: IActionCreator<TParams, TActionFields> = ((params: TParams = {} as TParams) => ({
        ...(factory(params || ({} as TParams)) as any),
        type
    })) as any;

    creator.is = (action: Action): action is Action & TActionFields => {
        return !!action && (action.type || "").toUpperCase().trim() === type;
    };

    creator.type = type;

    creator.typeInterface = {} as TActionFields & Action;

    return creator;
}

export interface IApiCallActionSet<TParams, TResult, TError> {
    trigger: IActionCreator<TParams>;
    running: IActionCreator<TParams, TParams>;
    ok: IActionCreator<{ params: TParams; result: TResult }>;
    error: IActionCreator<{ params: TParams; error: TError }>;
}

const existingActionTypes = new Set<string>();

function generateActionType(type: string, subtype?: string): string {
    if (!type) {
        throw new Error("Action type is not defined.");
    }

    type = type.toUpperCase();

    let action = `${type} ${subtype ? ": " + subtype.toUpperCase() : ""}`;

    if (existingActionTypes.has(action)) {
        let index = 1;
        while (true) {
            const a = `${action} (${index}) ${subtype ? ": " + subtype.toUpperCase() : ""}`;

            if (!existingActionTypes.has(a)) {
                action = a;
                break;
            }

            index++;
        }
    }

    action = action.trim();

    existingActionTypes.add(action);

    return action;
}
