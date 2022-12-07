# React test

![alt](https://i.imgur.com/i2pmojo.gif)

You have been given the task of making a TODO list page. A table should show which items belong to which person and whether or not they have been completed. To avoid having a huge table, it must be accompanied by a paging system. Last but not least, we want to add items to the list. Adding items to the list is a local operation, which means that no POST request is made to add the item, it just needs to be added to the table.
You have one hour to complete as many of the following requirments as possible. But first, don't forget to read the rules bellow. Use this codesandbox as a starting point: `https://codesandbox.io/s/new`

## Rules

- Surfing the web is allowed!
- You can use any layout system if you want. (Ant Design, Material UI, Bootstrap, etc...)
- You can use both functional and class components.
- No code optimization required.
- There is no mandatory code style, feel free to use any style you want as long as it is easy to read.

## Requirements

### Data

Data should be fetched from this dummy endpoint `https://jsonplaceholder.typicode.com/todos`. You can use fetch, axios or any other method for fetching the information. This endpoint contains dummy data about a TODO list with this format:

```json
{
	userId: 1, //User id
	id: 1, // TODO id
	title: "delectus aut autem", // TODO description
	completed: false // Wether the TODO has been completed or not
},
```

### Table

The table must contain four columns in this particular order:
![alt](https://i.imgur.com/mctJwEg.png)

- #: `id` field from schema above. Centered.
- User: `userId` field from schema above. Centered.
- Description: `title` field from schema above.
- Completed: `completed` field from schema above. Centered. If true, a check icon should be put in place, otherwise, a cross icon.

Make sure to add borders to the cells to add clarity to your table.
Table rows of uncompleted elements should have another background color.

### Pagination:

![alt](https://i.imgur.com/HeEA49v.png)
<br>
Must be dinamic according to the size of the table with 10 elements per page. The selected page must be shown in bold text as shown above. When clickin on each number the page, and so, the content of the table should change.

### New todo

An input will help the user add elements to the table as such:
![alt](https://i.imgur.com/ntWfNrg.gif)

As you can see bellow, when an item is added to the list it must appear at the top of the table. Add a random `userId` and `id`. By default the element will be uncompleted. Once the form has been submitted the cursor should automatically focus the input again. You can trigger the form submission by clickin on the Button at the right or by pressing the `Enter` key in your keyboard.

### Loading

![alt](https://i.imgur.com/jTl8EkD.gif)

A loading screen should appear while the data is being fetched.
Don't forget to add a `Reload` button.

### Error

![alt](https://i.imgur.com/dSB9yLE.gif)

A error screen should appear if there was an issue loading the data. (You can use Offline mode in Chrome developper console to try this one out)
