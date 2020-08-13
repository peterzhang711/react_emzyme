import checkPropTypes from 'check-prop-types'

export const findByTestAtrr = (component, atrrName) => {
    const Atrr = component.find(`[data-test='${atrrName}']`)
    return Atrr
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr
}