import {
    Button,
    Form,
    FormItem,
    Select,
    Option,
    DatePicker,
    TimePicker,
    Switch,
    Checkbox,
    Radio,
    RadioGroup,
    CheckboxGroup,
    Col,
    Input

} from 'element-ui'
const element = {
    install: function(Vue) {
        Vue.use(Select)
        Vue.use(Input)
        Vue.use(Option)

        Vue.use(Radio)


        Vue.use(Col)
        Vue.use(Checkbox)

        Vue.use(CheckboxGroup)

        Vue.use(Switch)

        Vue.use(DatePicker)
        Vue.use(TimePicker)


        Vue.use(Form)
        Vue.use(FormItem)

        Vue.use(Button)

        Vue.use(RadioGroup)

        Vue.prototype.$notify = Notification;
    }
}

export default element