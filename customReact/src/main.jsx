function customRender(reactElement, container){
    const DOMelement = document.createElement(reactElement.type)
    DOMelement.innerHTML = reactElement.children
    DOMelement.setAttrubute('href', reactElement.props.href)
    DOMelement.setAttrubute('target', reactElement.props.target)
    container.appendChild(DOMelement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('#root')

customRender(reactElement,mainContainer)

