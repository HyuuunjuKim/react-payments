import { Circle, CIRCLE_SIZE } from '../../components/commons/circle/Circle';
import { COLOR } from '../../constants/color';

export default {
  title: 'Commons/Circle',
  component: Circle,
  argTypes: {
    backgroundColor: {
      options: COLOR,
      control: { type: 'select' },
    },
    width: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
    },
    height: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
    },
  },
};

const Template = args => <Circle {...args}></Circle>;

export const Default = Template.bind({});
Default.args = {};

export const XSmall = Template.bind({});
XSmall.args = {
  size: CIRCLE_SIZE.XS,
};

export const Small = Template.bind({});
Small.args = {
  size: CIRCLE_SIZE.SM,
};

export const Large = Template.bind({});
Large.args = {
  size: CIRCLE_SIZE.LG,
};
