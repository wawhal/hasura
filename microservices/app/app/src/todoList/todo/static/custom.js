    function updateNewValue(element,taskid){
      taskName=$('#newval').val();
      jQuery.ajax({
        url:"/",
        data:{taskName:taskName,taskid:taskid},
        type: 'PUT',
        success:function(data){
            $(element).closest('span').html(taskName);
        }
      });
    };

    $(function() {
        var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
        function csrfSafeMethod(method) {
            // these HTTP methods do not require CSRF protection
            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
        }

        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
          }
        });

        $('form').each(function() {
            $(this).find('input').keypress(function(e) {
                // Enter pressed?
                if(e.which == 10 || e.which == 13) {
                    $(this).form.submit();
                }
            });

           $(this).find('input[type=submit]').hide();
        });

        $('body').on('dblclick','.item',function(e){
          taskid=$(this).attr("value");
          taskName=$(this).html();
          input_box="<input type='text' id='newval' value='"+taskName+"'>";
          button="<button onclick='updateNewValue(this,taskid);'>Save</button>";
          $(this).html(input_box+button);
        });

        $('body').on('click','.itemdelete',function(e){
          var element=this;
          taskid=$(this).attr("value");
          jQuery.ajax({
              url:"/",
              type: 'DELETE',
              data:{taskid:taskid},
              success:function(data){
                  $(element).closest('.task').hide(); 
              }
          });
        });

    });
