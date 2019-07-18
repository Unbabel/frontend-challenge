export interface INoMatch {
  isMatched: false;
}

export interface IMatch<TParams, TQueryString> {
  isMatched: true;
  params: TParams;
  query?: TQueryString & { [key: string]: string };
}

export interface ILocationDescriptor {
  search?: string;
  pathname: string;
}

export interface IUrlPath<TParams, TQueryString> {
  urlTemplate: string;

  paramType: TParams;
  queryType: TQueryString;

  /**
   * Checks if an URL matches a pattern specified on creating URL and extracts parameters and query if matched.
   * @param url An URL to check
   * @param exact If true the method'll check if
   * the pattern matched the full URL, if false - only the beginning of the URL would be checked.
   */
  match(
    url: string | ILocationDescriptor,
    exact: boolean
  ): INoMatch | IMatch<TParams, TQueryString>;

  format(params: TParams, query?: any): string;

  /**
   * Parses the URL and constructs the new URL with
   * updated parameters and query string.
   *
   * If the given URL doesn't match current UrlPath instance, method returns undefined.
   */
  replace(
    url: string | ILocationDescriptor,
    params?: Partial<TParams>,
    query?: Partial<TQueryString>
  ): string | undefined;
}
