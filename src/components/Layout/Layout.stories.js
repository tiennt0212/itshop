import { StraightLayout, LayoutWithSidebar } from "./Layout";

export default {
  title: 'Component/Layout',
  component: {StraightLayout, LayoutWithSidebar},
}

const template1 = (args) => <StraightLayout {...args}></StraightLayout>;
const template2 = (args) => <LayoutWithSidebar {...args}></LayoutWithSidebar>;

export const straightLayout = template1.bind({});
export const layoutWithSidebar = template2.bind({});
