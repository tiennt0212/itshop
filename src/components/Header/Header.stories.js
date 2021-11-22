import Header from "./Header";

export default {
  title: 'Component/Header',
  component: Header,
}

const template = (args) => <Header {...args}></Header>;

export const header = template.bind({});