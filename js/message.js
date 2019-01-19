var APP_ID = '9cdSwthS8Epe0egXgo3Bnn1t-gzGzoHsz';
var APP_KEY = 'Nxzy7zJEFFOF8y4cIKgo28Gh';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (message) {
    let array = message.map((item)=> item.attributes)
    array.forEach((item)=>{
    	let li =document.createElement('li')
    	li.innerText = `${item.name}: ${item.content}`
    	let messageList = document.querySelector('#messageList')
    	messageList.appendChild(li)
    })
}, function (error) {
    alert('提交失败，请改天来留言')
});

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
	e.preventDefault()
	let content = myForm.querySelector('input[name=content]').value
	let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
    	'name':name,
    	'content': content,
    }).then(function(object) {
    	let li =document.createElement('li')
    	li.innerText = `${object.attributes.name}: ${object.attributes.content}`
    	let messageList = document.querySelector('#messageList')
    	messageList.appendChild(li)
    	myForm.querySelector('input[name=content]').value = ''
    	console.log(object)
    })

})




/*
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
 console.log(object);
})*/