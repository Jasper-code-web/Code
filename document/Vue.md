# createApp

1. 创建Vue实例

   ```javascript
   const app = Vue.createApp({})
   	.component('SearchInput', SearchInputComponent)
   	.directive('focus', focusDirective)
   	.use(localPlugin)
   	.mount('#app')
   ```

2. lifecycle

   1.app = createApp({}).mount('#app')

   2.init Events & lifecycle

   3.beforeCreate

   4.init injections & reactivity

   5.created

   6.Has 'template' option

   7.yes : compile template into render function

   8.no: compile el,s innerHTML as template

   9.beforeMount

   10.create app.$el and append it to el

   11.mounted

   12.when data change

   13.beforeUpdate

   14.Virtual DOM re-rendered and patch

   15.updated

   16.beforeUnmount

   17.unmounted























