angular.module("imgurApp", ['ngRoute'])
    // render the appropriate view and template using the AngularJS
    // routeProvider 

    .config(function($routeProvider) {
        $routeProvider
            .when("/latest", {
                // specify which template to display
                templateUrl: "latest.html",
                controller: "ListController",
                resolve: {
                    contacts: function(Latest) {
                        // Contacts service requests all of the 10 latest search queries from the database
                        return Latest.getLatest();
                    }
                }
            })
            .when("/search/:item", {
                controller: "SearchController",
                templateUrl: "results.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })
    .service("Latest", function($http) {
        // request the contacts data
        this.getLatest = function() {
            // built-in #http service generates HTTP requests and returns a promise
            return $http.get("/latest").
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding latest image searches.");
                });
        }
        this.createContact = function(contact) {
            return $http.post("/contacts", contact).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error creating contact.");
                });
        }
        this.getContact = function(contactId) {
            var url = "/contacts/" + contactId;
            return $http.get(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding this contact.");
                });
        }
        this.editContact = function(contact) {
            var url = "/contacts/" + contact._id;
            console.log(contact._id);
            return $http.put(url, contact).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error editing this contact.");
                    console.log(response);
                });
        }
        this.deleteContact = function(contactId) {
            var url = "/contacts/" + contactId;
            return $http.delete(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error deleting this contact.");
                    console.log(response);
                });
        }
    })
    // pass the data from the service to the view with an AngularJS
    // controller
    // allows us to add data to the scope and access it from our views
    // the controller adds the contacts data from our service to the homepage
    // scope as a variable named "contacts" -- we can access it directly from the template ("list.html")
    .controller("ListController", function(contacts, $scope) {
        $scope.contacts = contacts.data;
    })
    .controller("NewContactController", function($scope, $location, Contacts) {
        $scope.back = function() {
            $location.path("#/");
        }

        $scope.saveContact = function(contact) {
            Contacts.createContact(contact).then(function(doc) {
                var contactUrl = "/contact/" + doc.data._id;
                $location.path(contactUrl);
            }, function(response) {
                alert(response);
            });
        }
    })
    .controller("SearchController", function($scope, $routeParams, Contacts) {
        Contacts.getContact($routeParams.contactId).then(function(doc) {
            $scope.contact = doc.data;
        }, function(response) {
            alert(response);
        });

        $scope.toggleEdit = function() {
            $scope.editMode = true;
            $scope.contactFormUrl = "contact-form.html";
        }

        $scope.back = function() {
            $scope.editMode = false;
            $scope.contactFormUrl = "";
        }

        $scope.saveContact = function(contact) {
            Contacts.editContact(contact);
            $scope.editMode = false;
            $scope.contactFormUrl = "";
        }

        $scope.deleteContact = function(contactId) {
            Contacts.deleteContact(contactId);
        }
    });