var _ = require('lodash');


var users =[
			{"email": "admin@admin.com", 
			"name": "admin",
			"password": "pass",
			"location": "Dublin"
			},
			{"email": "laura@laura.com", 
			"name": "Laura",
			"password": "pass",
			"location": "Waterford"
			},
			{"email": "lisa@lisa.com", 
			"name": "Lisa",
			"password": "pass",
			"location": "Waterford"
			},




];


var stubAPI = {
	delete : function(k) {
                 var elements = _.remove(users, 
                     function(user) {
                           return user.email == k;
                        }); 
                        },
    getAll : function() {
              return users ;
          },
    add : function(e,n,p,l) {
                 users.push({
                     email: e, name: n, password : p, location: l }) ;
              },
    update : function(key,e,n,p,l) {
                   var index = _.findIndex(users, function(user) {
                        return user.email == key;
                      } );      
                   if (index != -1) {
                      users.splice(index, 1, {email: e, name: n, password : p, location: l});
                    }
    }
}
exports.api = stubAPI ;
