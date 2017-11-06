
        
      $(document).ready(function(){
          //run this JS code as soon as the index.html's DOM is ready and safe to manipulate;
    //$body.html('');  
          
    //function to update tweets 
          
        var tweeter = function(){
          $('li.update').remove();
            for (var i = 0; i < streams.home.length; i++) {
            var tweetObject = streams.home[i];
            var userName = '@' + tweetObject.user;
            $('ul.tweetbody').append('<li class="update">' + '<p class = "source">' + '<button class = "username">' + userName + '</button>' + '<hr />' + tweetObject.created_at + '</p>' + tweetObject.message + '</li>');
          };
        };
          
          //function to select tweets by user
        var userSelect = function(user){
          $('li.update').remove();
          for (var i = 0; i < streams.home.length; i++) {
            var tweetObject = streams.home[i];
            var userName = '@' + tweetObject.user;   
            if (user===userName) { 
              $('ul.tweetbody').append('<li class="update">' + '<p class = "source">' + '<button class = "username">' + userName + '</button>' + '<hr />' + tweetObject.created_at + '</p>' + tweetObject.message + '</li>');
            };
          };
        };
        
        tweeter();
          
        var autotrigger = true;
        
    //auto updater timer function
        setInterval(function() {
               if (autotrigger) {
                   tweeter();
          };
        }, 15000);
        
          
    //trigger userSelect on click & stop auto-populate
        $(document).on('click', '.username', function() {
          autotrigger = false;
          $('#showbutton').removeClass('hidebutton');
          userSelect($(this).text());
        });   
        
          //show all users & reinitiate auto-populate
        $(document).on('click', '#showbutton', function() {
           autotrigger = true;
           $('#showbutton').addClass('hidebutton');
           tweeter();
        });
      });

    /*users: array of all usernames in string-format
    streams: object with two properties, users & home
    streams.home - array-like object of all tweets 
    streams.users object with properties for each user
        
       /* bare minimum requirements
       
       (1)  show user new tweets somehow; either automatically or via button
       
       (2)  display timestamps of when tweets were created; using real time.
       
       (3)  allow user to click on username to see that user's timeline
       
       (4)  make it beautiful
       
       */
          
          
          

        
        