
export interface INavItem {
    name: string
    to?: string
    inner: {name: string,to: string}[]
}