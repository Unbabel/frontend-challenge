import * as pathToRegexp from "path-to-regexp";
import { Key } from "path-to-regexp";
import * as querystring from "querystring";
import * as URL from "url";
import {
  ILocationDescriptor,
  IMatch,
  INoMatch,
  IUrlPath
} from "./url-utils.types";

export function createPath<TParams = {}, TQueryString = {}>(
  urlTemplate: string
): IUrlPath<TParams, TQueryString> {
  if (!urlTemplate) {
    throw new Error("URL template is not defined.");
  }

  return new UrlPathImpl<TParams, TQueryString>(urlTemplate);
}

class UrlPathImpl<TParams, TQueryString>
  implements IUrlPath<TParams, TQueryString> {
  public readonly urlTemplate: string;

  get paramType(): TParams {
    throw new Error("Use this property in Typescript typeof operator only");
  }

  get queryType(): TQueryString {
    throw new Error("Use this property in Typescript typeof operator only");
  }

  constructor(urlTemplate: string) {
    if (urlTemplate.endsWith("/") && urlTemplate !== "/") {
      urlTemplate = urlTemplate.replace(/\/$/, "");
    }

    this.urlTemplate = urlTemplate;
  }

  match(
    url: string | Location,
    exact: boolean
  ): INoMatch | IMatch<TParams, TQueryString> {
    const location = this.normalizeUrl(url);
    const paramNames: Key[] = [];
    const regexpTemplate = exact
      ? pathToRegexp(this.urlTemplate, paramNames)
      : pathToRegexp(this.urlTemplate, paramNames, { end: false });
    const result = regexpTemplate.exec(location.pathname);
    const noMatch: INoMatch = { isMatched: false };

    if (!result || result.length < paramNames.length + 1) {
      return noMatch;
    }

    const matches = result.slice(1);

    if (matches.length !== paramNames.length) {
      return noMatch;
    }

    const params = matches.reduce<TParams>(
      (paramResult: any, value: string, index: number) => {
        paramResult[paramNames[index].name] = value;

        return paramResult;
      },
      {} as any
    );

    let query: TQueryString | undefined;

    if (location.search) {
      const searchString = location.search.startsWith("?")
        ? location.search.substring(location.search.indexOf("?") + 1)
        : location.search;

      query = querystring.parse(searchString) as any;
    }

    return {
      isMatched: true,
      params,
      query: query as any
    };
  }

  format(params: any, query?: any): string {
    params = params || ({} as any);

    const qs = query ? "?" + querystring.stringify(query) : "";

    const toPath = pathToRegexp.compile(this.urlTemplate);
    const result = toPath(params);

    return result + qs;
  }

  /**
   * Parses the URL and constructs a new URL with
   * partially updated parameters and query string.
   *
   * If the given URL doesn't match current UrlPath instance, the method returns undefined.
   */
  replace(
    url: string | Location,
    params?: Partial<TParams>,
    query?: Partial<TQueryString>
  ): string {
    const match = this.match(url, true);

    if (!match.isMatched) {
      return undefined;
    }

    return this.format(
      {
        ...(match.params as any),
        ...(params || ({} as any))
      },
      {
        ...(match.query || ({} as any)),
        ...(query || ({} as any))
      }
    );
  }

  private normalizeUrl(url: string | ILocationDescriptor): ILocationDescriptor {
    if (typeof url === "string") {
      const parsedUrl = URL.parse(url);
      return {
        pathname: parsedUrl.pathname || "/",
        search: parsedUrl.search
      };
    }

    if (typeof url === "object") {
      return {
        pathname: url.pathname,
        search:
          !url.search || url.search.indexOf("?") !== 0
            ? url.search
            : url.search.substring(1)
      };
    }

    return {
      pathname: ""
    };
  }
}
