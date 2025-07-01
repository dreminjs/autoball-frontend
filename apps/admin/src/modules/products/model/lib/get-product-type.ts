

interface IArgs {
    isDisc: boolean
    isTire: boolean
}

export const getProductType = (args: IArgs): "car" | "tire" | "disc" => {
    switch (true) {
        case args.isDisc: 
            return "disc"
        case args.isTire:
            return "tire"
        default:
            return "car"
    }
}