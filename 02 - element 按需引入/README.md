- 按需引入 （能减少打包后的项目体积）     

1，安装 ```babel-plugin-component``` 插件
```
npm install babel-plugin-component -D
```
2, 修改.babelrc 如果是vueCli3 则修改babel.config.js
```js
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    // element官方教程
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
```
3, 新建 ```src/element/index.js```文件 (未使用的组件可以直接删除)

::: details 详细代码
```js
import {
	    Select,
	    Option,
	    OptionGroup,
	    Input,
	    InputNumber,
	    Radio,
	    Tree,
	    Dialog,
	    Row,
	    Col,
	    Checkbox,
	    CheckboxButton,
	    CheckboxGroup,
	    Cascader,
	    Switch,
	    Slider,
	    TimeSelect,
	    TimePicker,
	    DatePicker,
	    Upload,
	    Rate,
	    ColorPicker,
	    Transfer,
	    Form,
	    FormItem,
	    Table,
	    TableColumn,
	    Tag,
	    Button,
	    Progress,
	    Pagination,
	    Badge,
	    Avatar,
	    Alert,
	    Loading,
	    Message,
	    MessageBox,
	    Notification,
	    Menu,
	    MenuItemGroup,
	    MenuItem,
	    Submenu,
	    RadioGroup,
	    RadioButton
	
	} from 'element-ui'
	const element = {
	    install: function(Vue) {
	        Vue.use(Select)
	        Vue.use(Option)
	        Vue.use(OptionGroup)
	        Vue.use(Input)
	        Vue.use(InputNumber)
	        Vue.use(Radio)
	        Vue.use(Tree)
	        Vue.use(Dialog)
	        Vue.use(Row)
	        Vue.use(Col)
	        Vue.use(Checkbox)
	        Vue.use(CheckboxButton)
	        Vue.use(CheckboxGroup)
	        Vue.use(Cascader)
	        Vue.use(Switch)
	        Vue.use(Slider)
	        Vue.use(TimePicker)
	        Vue.use(TimeSelect)
	        Vue.use(DatePicker)
	        Vue.use(Upload)
	        Vue.use(Rate)
	        Vue.use(ColorPicker)
	        Vue.use(Transfer)
	        Vue.use(Form)
	        Vue.use(FormItem)
	        Vue.use(Table)
	        Vue.use(TableColumn)
	        Vue.use(Tag)
	        Vue.use(Button)
	        Vue.use(Progress)
	        Vue.use(Pagination)
	        Vue.use(Badge)
	        Vue.use(Avatar)
	        Vue.use(Alert)
	        Vue.use(Loading)
	        Vue.use(Menu)
	        Vue.use(MenuItem)
	        Vue.use(MenuItemGroup)
	        Vue.use(Submenu)
	        Vue.use(RadioGroup)
	        Vue.use(RadioButton)
	
	
	        Vue.prototype.$message = Message;
	        Vue.prototype.$confirm = MessageBox.confirm;
	        Vue.prototype.$alert = MessageBox.alert;
	        Vue.prototype.$notify = Notification;

	    }
}

export default element
```
:::


4, 在main.js 中写入
```js
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)
```