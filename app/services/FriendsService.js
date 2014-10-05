angular
.module('app')
.factory('FriendsService', function () {
	return{
		get: function () {
			return [
				{
					"name": "Will Three",
					"age": 30,
					"isSpecial": false
				},
				{
					"name": "Laura Three",
					"age": 26,
					"isSpecial": true
				}
			]
		}
	}
});