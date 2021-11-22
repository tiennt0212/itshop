import { LoginForm } from "./LoginForm";

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
};

const template = (args) => <LoginForm {...args}></LoginForm>;

export const loginForm = template.bind({});
