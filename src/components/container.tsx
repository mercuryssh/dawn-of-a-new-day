import { Component, JSXElement } from 'solid-js'

interface ContainerProps {
  children: JSXElement | JSXElement[]
}

const Container: Component<ContainerProps> = ({ children }): JSXElement => {
  return (
    <div class="container">
      <div>
        {children}
      </div>
    </div>
  )
}
export default Container
