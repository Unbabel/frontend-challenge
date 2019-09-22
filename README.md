# unbabel-frontend-challenge

## Checklist

### Data

- [X] Fetch data
- [X] List data
- [X] Remove data
- [ ] Add data
- [ ] Editing data
- [X] Push data

### Design

- [X] Custom fonts
- [X] Custom checkbox

### Functionality

- [X] Get data button. When the user clicks on this button, your app will get the data from the URL in - [Data source](#Data source) and fill the list
- [X] Upload data button. When the user clicks on this button, your app will make a POST request to the same url as the Get data button. You should send the latest information on the list using the same structure as you have received it.
- [X] Custom checkbox. When the user clicks on the checkbox, it will become checked. It will not have any other functionality.
- [ ] Add line button. When the user clicks on this button, a new row will be added to the list and the user should be able to write text in both fields.
- [X] Delete row button. This button should be visible only when hovering each row item. When the user clicks on this button, your app will remove that row from the list.
- [ ] List item title This title should be editable.
- [ ] List item content. This content should be editable.
- [X] App title. No functionality.
- [X] Person icon linked to each row. No functionality.

### Bonus points:

- [X] Keeping in mind accessibility
- [ ] Adding tests to your components and app
- [X] Using a store (Vuex) to manage the application data
- [X] Using vue-router to prepare the app for a future where it would have multiple routes

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See - [Configuration Reference](https://cli.vuejs.org/config/).
