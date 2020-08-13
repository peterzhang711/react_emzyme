export const findByTestAtrr = (component, atrrName) => {
    const Atrr = component.find(`[data-test='${atrrName}']`)
    return Atrr
}