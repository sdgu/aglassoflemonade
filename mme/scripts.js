$(document).ready(function()
{
    $('#bottom').click(function()
    {
        $('html, body').animate(
        {
            scrollTop: $(document).height()
        }, 'slow');
        return false;
    });
});

(function($)
{
    $.fn.invisible = function()
    {
        return this.each(function()
        {
            $(this).css(
            {
                opacity: 1.0,
                visibility: "visible"
            }).animate(
            {
                opacity: 0.0
                
            }, 1000);
        });
    };
    $.fn.visible = function()
    {
        return this.each(function()
        {
            $(this).css(
            {
                opacity: 0.0,
                visibility: "visible"
            }).animate(
            {
                opacity: 1.0
                
            }, 1000);
        });
    };
}(jQuery));

//int count = 0;

//if (count == 0)
//{




$(document).keypress(function(e)
{
    var key = e.which;
    if (key == 116)
    {
        // if the user pressed 't':
        //$('#first').toggle();
        $('#first').visible();
    }
});

////////////////////////////click to show/////////////////////////////////

$(document).ready(
    function()
    {
        $('#showall').click(function()
        {
            $('#first').visible();
            $('#second').visible();
            $('#third').visible();
            $('#fourth').visible();
            $('#fifth').visible();
            $('#sixth').visible();
            $('#seventh').visible();
            $('#eigth').visible();
            $('#ninth').visible();
            $('#tenth').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#hideall').click(function()
        {
            $('#first').invisible();
            $('#second').invisible();
            $('#third').invisible();
            $('#fourth').invisible();
            $('#fifth').invisible();
            $('#sixth').invisible();
            $('#seventh').invisible();
            $('#eigth').invisible();
            $('#ninth').invisible();
            $('#tenth').invisible();
        });
    });

$(document).ready(
    function()
    {
        $('#1.fansy').click(function()
        {
            $('#first').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#2.fansy').click(function()
        {
            $('#second').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#3.fansy').click(function()
        {
            $('#third').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#4.fansy').click(function()
        {
            $('#fourth').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#5.fansy').click(function()
        {
            $('#fifth').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#6.fansy').click(function()
        {
            $('#sixth').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#7.fansy').click(function()
        {
            $('#seventh').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#8.fansy').click(function()
        {
            $('#eigth').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#9.fansy').click(function()
        {
            $('#ninth').visible();
        });
    });

$(document).ready(
    function()
    {
        $('#9.fansy').click(function()
        {

            $('#first').invisible();
            $('#second').invisible();
            $('#third').invisible();
            $('#fourth').invisible();
            $('#fifth').invisible();
            $('#sixth').invisible();
            $('#seventh').invisible();
            $('#eigth').invisible();
            $('#ninth').visible();
        });
    });
//count++;
//}

// if (count == 1)
// {
// 	$(document).keypress(function(e){
// 	    var key = e.which;
// 	    if (key == 116) {
// 	        // if the user pressed 't':
// 	        $('#second').toggle();
// 	    }
// 	});
// 	count++;
// }

// else
// {
// 	alert("nothing");
// }