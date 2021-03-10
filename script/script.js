$(function(){

    $("button#tabBtn1").click(function(){

        /* 버튼 모양 변경 시작 */
        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "solid 1px #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        /* 내용 변경 시작 */
        $("div#tabContents1").css({
            "display": "block"
        });
        $("div#tabContents2").css({
            "display": "none"
        });
    });

    $("button#tabBtn2").click(function(){

        /* 버튼 모양 변경 시작 */
        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "solid 1px #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        /* 내용 변경 시작 */
        $("div#tabContents1").css({
            "display": "none"
        });
        $("div#tabContents2").css({
            "display": "block"
        });
    });

}); /* $(function(){}   );  */

/*
    제리쿼리 사용법
    1. 요소를 선택하고 => $("선택자")
    2. 기능을 적용하세요. =>   .메서드()
    3. 추가기능이 필요하다면 메서드의 소괄호 내부에
    function() {} 을  기재한 후
    =>   .메서드(  function( ){  } )
    4. 중괄호 내부에서 다시
    5. 요소를 선택하고
    =>  function() { $("선택자") }
    6. 기능을 적용하세요.
    =>  function() { $("선택자").메서드 }
*/
