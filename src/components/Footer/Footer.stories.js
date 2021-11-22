import Footer from "./Footer";

export default {
  title: 'Component/Footer',
  component: Footer,
}

const template = (args) => <Footer {...args}></Footer>;

export const footer = template.bind({});