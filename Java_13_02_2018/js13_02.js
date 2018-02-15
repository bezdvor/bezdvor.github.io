/**
 * Created by Note_Bezdvor on 15.02.2018.
 */
"use strict"
var articles = [
	{
		title:'title1',
		description:'Lorem ipsum dolor sit amet, consectetur ' +
		'adipisicing elit. Culpa cumque, ex impedit, in iure, necessitatibus quam quidem ratione ' +
		'repellendus sapiente temporibus totam! Aliquam corporis cum ducimus laborum, ' +
		'necessitatibus neque tenetur.',
		links:[
			{
				href:'google.com',
				text:'Яндекс'
			},
			{
				href:'facebook.com',
				text:'facebook'
			}
		],
		inAccess:false
	},
	{
		title:'title2',
		description:'Lorem2 ipsum dolor sit amet, consectetur ' +
		'adipisicing elit. Culpa cumque, ex impedit, in iure, necessitatibus quam quidem ratione ' +
		'repellendus sapiente temporibus totam! Aliquam corporis cum ducimus laborum, ' +
		'necessitatibus neque tenetur.',
		links:[
			{
				href:'google.com',
				text:'Яндекс2'
			},
			{
				href:'facebook.com',
				text:'facebook2'
			}
		],
		inAccess:true
	},
	{
		title:'title3',
		description:'Lorem3 ipsum dolor sit amet, consectetur ' +
		'adipisicing elit. Culpa cumque, ex impedit, in iure, necessitatibus quam quidem ratione ' +
		'repellendus sapiente temporibus totam! Aliquam corporis cum ducimus laborum, ' +
		'necessitatibus neque tenetur.',
		links:[
			{
				href:'google.com',
				text:'Яндекс3'
			},
			{
				href:'facebook.com',
				text:'facebook3'
			}
		],
		inAccess:false
	},
	{
		title:'title4',
		description:'Lorem4 ipsum dolor sit amet, consectetur ' +
		'adipisicing elit. Culpa cumque, ex impedit, in iure, necessitatibus quam quidem ratione ' +
		'repellendus sapiente temporibus totam! Aliquam corporis cum ducimus laborum, ' +
		'necessitatibus neque tenetur.',
		links:[
			{
				href:'google.com',
				text:'Яндекс4'
			},
			{
				href:'facebook.com',
				text:'facebook4'
			}
		],
		inAccess:true
	},
	{
		title:'title5',
		description:'Lorem ipsum dolor sit amet, consectetur ' +
		'adipisicing elit. Culpa cumque, ex impedit, in iure, necessitatibus quam quidem ratione ' +
		'repellendus sapiente temporibus totam! Aliquam corporis cum ducimus laborum, ' +
		'necessitatibus neque tenetur.',
		links:[
			{
				href:'google.com',
				text:'Яндекс5'
			},
			{
				href:'facebook.com',
				text:'facebook5'
			}
		],
		inAccess:true
	}
]

var h2 = ''
var p = ''
var links = ''
var checkbox = ''
for (var i = 0; i < articles.length; i++){
	h2 = '<h2>' + articles[i].title + '</h2>'
	p = '<p>' + articles[i].description + '</p>'
	checkbox = '<input type="checkbox"'+(articles[i].inAccess ? 'checked':'')+'>'
	var dataLinks = articles[i].links
	links = '<div>'
	for(var j = 0; j < dataLinks.length; j++){
		links += '<a href = "'+ dataLinks[j].href +'">'+dataLinks[j].text+'</a><br>'
	}
	links += '</div>'
	document.body.innerHTML += h2 + checkbox + p + links
}