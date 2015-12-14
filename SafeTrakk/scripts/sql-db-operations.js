//Based on http://www.html5rocks.com/en/tutorials/webdatabase/todo/

document.addEventListener("deviceready", init, false);
//Activate :active state on device
document.addEventListener("touchstart", function () { }, false);

var appDB = {};
appDB.db = null;

appDB.openDb = function () {
    var dbName = "focuscharter.sqlite";
    if (window.navigator.simulator === true) {
        app.db = window.openDatabase(dbName, "1.0", "Cordova Demo", 200000);
    }
    else {
        app.db = window.sqlitePlugin.openDatabase(dbName);
    }
}

appDB.createTable = function () {
    var db = appDB.db;
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS app_settings(ID INTEGER PRIMARY KEY ASC, phone_no TEXT, imei_no TEXT, is_verified BOOLEAN, added_on DATETIME)", []);
        tx.executeSql("CREATE TABLE IF NOT EXISTS bus_information(ID INTEGER PRIMARY KEY ASC, bus_id INTEGER, bus_name TEXT,  added_on DATETIME)", []);
    });
}

appDB.addChild = function (todoText) {
    var db = appDB.db;
    db.transaction(function (tx) {
        var addedOn = new Date();
        //tx.executeSql("INSERT INTO app_settings(phone_no, imei_no, added_on) VALUES (?,?,?)",
		//			  [todoText, addedOn],
		//			  app.onSuccess,
		//			  app.onError);
    });
}

appDB.onError = function (tx, e) {
    console.log("Error: " + e.message);
}

appDB.onSuccess = function (tx, r) {
    app.refresh();
}

appDB.deleteChild = function (id) {
    var db = appDB.db;
    //db.transaction(function (tx) {
    //    tx.executeSql("DELETE FROM todo WHERE ID=?", [id],
	//				  app.onSuccess,
	//				  app.onError);
    //});
}

appDB.refresh = function () {
    //var renderTodo = function (row) {
    //    return "<li>" + "<div class='todo-check'></div>" + row.todo + "<a class='button delete' href='javascript:void(0);'  onclick='app.deleteTodo(" + row.ID + ");'><p class='todo-delete'></p></a>" + "<div class='clear'></div>" + "</li>";
    //}

    //var render = function (tx, rs) {
    //    var rowOutput = "";
    //    var todoItems = document.getElementById("todoItems");
    //    for (var i = 0; i < rs.rows.length; i++) {
    //        rowOutput += renderTodo(rs.rows.item(i));
    //    }

    //    todoItems.innerHTML = rowOutput;
    //}

    //var db = app.db;
    //db.transaction(function (tx) {
    //    tx.executeSql("SELECT * FROM bus_information", [],
	//				  render,
	//				  app.onError);
    //});
}

function init() {
    try {
        navigator.splashscreen.hide();
        appDB.openDb();
        appDB.createTable();
        appDB.refresh();
    } catch (ex) { alert(ex.message); }
}

function addTodo() {
    var todo = document.getElementById("todo");
    //appDB.addTodo(todo.value);
    todo.value = "";
}