angular
.module('app')
.factory('FriendsService', function () {
	return{
		get: function () {
			return [
				{
					"name": "Will Two",
					"age": 30,
					"isSpecial": false
				},
				{
					"name": "Laura Two",
					"age": 26,
					"isSpecial": true
				}
			]
		}
	}
});