import { render, RenderResult } from '@testing-library/vue'
import { Component } from 'vue'

export const renderComponent = (component: Component, store: any, props?: any): RenderResult => {
    return render(component, {
        props,
        global: {
            plugins: [store],
            mocks: { $t: () => { } }
        }
    })
}