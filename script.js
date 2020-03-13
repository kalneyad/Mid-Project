var time = new Date().toLocaleTimeString("en-US");
var date= new Date().toDateString();
document.write(time);
document.write("<br>");
document.write(date);


var posts = [{
   username: 'Mahatma Gandhi',
   profimg: 'https://i.imgur.com/SmqBCqf.jpg',
   text: "Satisfaction lies in the effort, not in the attainment, full effort is full victory.",
   likes: 5, 
   retweets: 5, 
   comments: 5
  },
            {
   username: 'Benjamin Franklin',
   profimg: 'https://i.imgur.com/S329dkX.jpg',
   text: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
   likes: 5, 
   retweets: 5, 
   comments: 5
  },
            {
   username: 'Stephen Hawking',
   profimg: 'https://i.imgur.com/wrce9dn.jpg',
   text: "We are in danger of destroying ourselves by our greed and stupidity. We cannot remain looking inwards at ourselves on a small and increasingly polluted and overcrowded planet.",
   likes: 5, 
   retweets: 5, 
   comments: 5
  },
            {
   username: 'Victor Hugo',
   profimg: 'https://i.imgur.com/kKeTmGQ.jpg',
   text: "Be like the bird who, pausing in her flight awhile on boughs too slight, feels them give way beneath her, and yet sings, knowing she hath wings.",
   likes: 5, 
   retweets: 5, 
   comments: 5
  },
            {
   username: 'Albert Einstein',
   profimg: 'https://i.imgur.com/dbP9DyK.jpg?1',
   text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
   likes: 5, 
   retweets: 5, 
   comments: 5
  },
            {
   username: 'Nelson Mandela',
   profimg: 'https://i.imgur.com/pAxGmd4.jpg',
   text: "When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.",
   likes: 5, 
   retweets: 5, 
   comments: 5
  }];

var Post =[];

function newpost(parent){
  let that = this;
  this.username = parent.username;
  this.profimg = parent.profimg;
  this.text = parent.text;
  this.likes = parent.likes;
  this.retweets = parent.retweets;
  this.comments = parent.comments;

  this.post_element = document.createElement('div');
  this.post_element.className = 'wall';
  this.delete_element = document.createElement('button');
  this.delete_element.style.float = 'right';
  this.delete_element.className ='mybtn';
  this.username_element = document.createElement('h2');
  this.profimg_element = document.createElement('p');
  this.text_element = document.createElement('p');
  this.response_element = document.createElement('div');
  this.response_element.className = 'my_div';
  this.like_element = document.createElement('p');
  this.retweet_element = document.createElement('p');
  this.comment_element = document.createElement('p'); 

  this.delete_element.innerHTML = ' Delete Post '
  this.username_element.innerHTML = this.username;
  this.profimg_element.innerHTML = '<img src = ' + this.profimg + '</img>';
  this.text_element.innerHTML = this.text;
  this.like_element.innerHTML = 'Like ' + this.likes;
  this.retweet_element.innerHTML = 'Retweet ' + this.retweets;
  this.comment_element.innerHTML = 'Comment ' + this.comments;

  this.delete_element.addEventListener ("click", function(){
    that.post_element.remove();
  })

 this.like_element.addEventListener ("mouseover", function(){
   that.like_element.style.color = 'red';
  })
 this.like_element.addEventListener ("mouseout", function(){
   that.like_element.style.color = '';
  })
  this.like_element.addEventListener("click", function(){
    that.likes++;
    that.like_element.innerHTML = 'Like ' + that.likes;
    if (that.likes >= 20){
    document.body.style.backgroundColor = 'red';
  }
  })
  
 this.comment_element.addEventListener ("mouseover", function(){
   that.comment_element.style.color = 'blue';
  })
 this.comment_element.addEventListener ("mouseout", function(){
   that.comment_element.style.color = '';
  })
  this.comment_element.addEventListener("click", function(){
    that.comments++;
    that.comment_element.innerHTML = 'Comment ' + that.comments;
    if (that.comments >= 20){
    document.body.style.backgroundColor = 'blue';
  }
  })
  
 this.retweet_element.addEventListener ("mouseover", function(){
   that.retweet_element.style.color = 'green';
  })
 this.retweet_element.addEventListener ("mouseout", function(){
   that.retweet_element.style.color = '';
  })
  this.retweet_element.addEventListener("click", function(){
    that.retweets++;
    that.retweet_element.innerHTML = 'Retweet ' + that.retweets;
    if (that.retweets >= 20){
    document.body.style.backgroundColor = 'green';
  }
  })

  this.response_element.appendChild(this.like_element);
  this.response_element.appendChild(this.comment_element);
  this.response_element.appendChild(this.retweet_element);
  this.post_element.appendChild(this.delete_element);
  this.post_element.appendChild(this.username_element);
  this.post_element.appendChild(this.profimg_element);
  this.post_element.appendChild(this.text_element);
  this.post_element.appendChild(this.response_element);
  
  document.body.appendChild(this.post_element);
};

function dumbpost() {
  let that = this;
  this.dumbpost_element = document.createElement('div');
  this.dumbpost_element.className = 'wall';
  this.dumb_element = document.createElement('h2');
  this.dumbpush_element = document.createElement('button');
  this.dumbpush_element.className ='mybtn';
  
  this.dumb_element.innerHTML = 'Click Here to add a DUMB POST!!';
  this.dumbpush_element.innerHTML = 'Post NOW!';
  
  this.dumbpost_element.appendChild(this.dumb_element);
  this.dumbpost_element.appendChild(this.dumbpush_element);
  
  document.body.appendChild(this.dumbpost_element);
  
  this.dumbpush_element.addEventListener("click", function(){
   
	posts.push(
	{
	username: "DUMB User",
	profimg: 'https://i.imgur.com/YpEU6.jpg', 
	text: "DUMB User DUMB Image DUMB Quote",
	likes: 0, 
	retweets: 0, 
	comments: 0
	})

  Post.push (new newpost(posts[posts.length - 1]))
  that.dumbpost_element.remove();
  document.body.appendChild(that.dumbpost_element);
  }) 
}

for (var i = 0; i < posts.length; i++){
  Post.push (new newpost(posts[i]))
}

dumbpost();