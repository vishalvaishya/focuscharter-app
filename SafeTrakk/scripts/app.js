// store a reference to the application object that will be created
// later on so that we can use it if need be
var app;

// create an object to store the models for each view
window.APP = {
    models: {
        home: {
            title: 'Home'
        },
        settings: {
            title: 'Settings'
        },
        childrens: {
            title: 'Childrens'
            //ds: new kendo.data.DataSource({
            //    schema: {
            //        model: {
            //            id: "id",
            //            fields: {
            //                id: { type: "number" },
            //                name: { type: "string" },
            //                schoolid: { type: "string" },
            //                schoolname: { type: "string" },
            //                routeno: { type: "string" },
            //                pickuplocation: { type: "string" },
            //                pickuploclat: { type: "float" },
            //                pickuploclng: { type: "float" },
            //                pickuptime: { type: "string" },
            //                pickupdays: { type: "string" }
            //            }
            //        }
            //    },
            //    transport: {
            //        read: {
            //            url: "data/bus-live-status.json"
            //        },
            //        dataType: "json"
            //    }
            //}),
        },
        contacts: {
            title: 'Contacts',
            ds: new kendo.data.DataSource({
                data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
            }),
            alert: function (e) {
                alert(e.data.name);
            }
        }
    }
};

// this function is called by Cordova when the application is loaded by the device
document.addEventListener('deviceready', function () {
    // hide the splash screen as soon as the app is ready. otherwise
    // Cordova will wait 5 very long seconds to do it for you.
    navigator.splashscreen.hide();

    app = new kendo.mobile.Application(document.body, {
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'nova',        
        // the application needs to know which view to load first
        initial: 'views/children-list.html'
    });

    //var telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
    //    telephoneNumber.get(function (result) {
    //        console.log("result = " + result);
    //    }, function (error) {
    //        console.log("error = " + error.code);
    //    });
}, false);