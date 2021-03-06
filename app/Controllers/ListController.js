import ListService from "../Services/ListService.js";
import _store from "../store.js"


//TODO Don't forget to render to the screen after every data change.
//ANCHOR Come back and get an "id" for this
function _drawLists() {
  let template = ""
  let lists = _store.State.lists

  lists.forEach(list => template += list.Template)
  document.getElementById("lists").innerHTML = template

}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems

  delete(listId) {
    ListService.delete(listId)

    _drawLists()
  }

  deleteTask(taskId, listId) {
    ListService.deleteTask(taskId, listId)

    _drawLists()
  }

  create(event) {
    event.preventDefault()
    let formData = event.target

    let newList = {
      title: formData.listName.value
    }

    ListService.create(newList)
    _drawLists()
    formData.reset()
  }

  addNewTask(event, listId) {
    event.preventDefault()
    let formData = event.target
    let newListData = {
      title: formData.taskName.value
    }
    ListService.addNewTask(newListData, listId)
    _drawLists()
  }

}