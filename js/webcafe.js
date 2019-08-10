let viewport = window.matchMedia('(max-width:999px)');
const KO_MENU = '메뉴'
const KO_CLOSE = '닫기'
const KO_OPEN = '열기'
const ENTER_KEY = 13;
const SPACE_BAR_KEY = 32;
const SELECT_KEY = [ENTER_KEY, SPACE_BAR_KEY]

$(window).resize(()=>{
    location.reload();
})

if ( viewport.matches ) {
    let nav = $('.navigation')
    let btn = $('.btn-menubar')
    let menuItems = $('.menu-item')
    let menuLists = $('.menu-list')
    let subMenus = $('.menu-menu')

    // btn click 이벤트를 발생했을 경우
    // nav 요소 is-act 클래스 추가
    btn.click(() => {
      nav.toggleClass('is-act')

      if( nav.hasClass('is-act') ) {
        btn.attr('aria-label', `${KO_MENU} ${KO_CLOSE}`)
        btn.attr('title', `${KO_MENU} ${KO_CLOSE}`)
        
      } else {
        btn.attr('aria-label', `${KO_MENU} ${KO_OPEN}`)
        btn.attr('title', `${KO_MENU} ${KO_OPEN}`)
      }

    })

    //  .menu-item 클래스에 icon-plus 클래스 추가하기
    menuItems.addClass('icon-plus')
    menuItems.attr('aria-haspopup', 'true')
    menuItems.attr('aria-expanded', 'false')
    menuItems.attr('role', 'button')
    menuItems.attr('tabindex', '0')

    menuItems.on('click keyup', function(e) {
      $this = $(this);
      if ( e.type === 'click' || SELECT_KEY.includes(e.keyCode) ) {
        menuLists.removeClass('menu-act')
        $this.parent().addClass('menu-act')
        menuItems.removeClass('icon-minus').addClass('icon-plus')
        menuItems.attr('aria-expanded', 'false')
        $this.addClass('icon-minus').removeClass('icon-plus')
        $this.attr('aria-expanded', 'true')
      }
    })
}
