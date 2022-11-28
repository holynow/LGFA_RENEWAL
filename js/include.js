'use strict';

const include = {
    header: () => {
        document.write('<header class="header">');
        document.write('<div class="header-top">');
        document.write('<a href="/index.html" class="comp-logo">');
        document.write('<h1><img src="/img/common/img-logo.png" alt="엘티일렉트릭(주)"></h1>');
        document.write('</a>');
        document.write('<div class="header-menu">');
        document.write('<div class="search-wrap">');
        document.write('<span class="ico-search"></span>');
        document.write('<input type="text" class="search-bar round3 border bg-color-f7" placeholder="검색어를 입력하세요.">');
        document.write('</div>');
        document.write('<label for="moreBtn" class="link-more-btn"><span class=""></span></label>');
        document.write('<input type="checkbox" id="moreBtn"></input>');
        document.write('<div class="header-link">');
        document.write('<a href="/html/member/login.html">로그인</a>');
        document.write('<a href="/html/member/join.html">회원가입</a>');
        document.write('<a href="/html/member/cart.html">장바구니</a>');
        document.write('<a href="#none" class="btn-round-green-h40">견적문의</a>');
        document.write('</div>');
        document.write('</div>');
        document.write('</div>');
        document.write('<!-- nav -->');
        document.write('<nav class="nav-wrap">');
        document.write('<div class="global-nav">');
        document.write('<ul>');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<img src="/img/common/ico-global-nav01.png" alt="">');
        document.write('<p>회사소개</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/data/data_room.html">');
        document.write('<img src="/img/common/ico-global-nav02.png" alt="">');
        document.write('<p>자료실</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<img src="/img/common/ico-global-nav03.png" alt="">');
        document.write('<p>단가자료</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<img src="/img/common/ico-global-nav04.png" alt="">');
        document.write('<p>응용도면</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/customer/faq.html">');
        document.write('<img src="/img/common/ico-global-nav04.png" alt="">');
        document.write('<p>고객센터</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        document.write('<div class="sub-nav">');
        document.write('<ul>');
        document.write('<li class="all-menu">');
        document.write('<a href="#none">전체품목</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">저고압기기</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">인버터</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">PLC</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">Servo / Motion</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">태양광인버터 EV Realay</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">HMI</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">계량기기</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">계전 · 계측기기</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">한국자동제어 KACON</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">제어기기 LGFA</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/category.html">기타기기</a>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        document.write('</nav>');
        document.write('<!-- mo nav -->');
        document.write('</header>');
    },
    style: () => {

    },
    script: () => {
        document.write('<script src="https://code.jquery.com/jquery-3.6.1.min.js" defer></script>')
        document.write('<script src="/js/ui.js" defer></script>')
    },
    footer: () => {
        document.write('<footer>')
        document.write('<div>')
        document.write('<img src="/img/dummy/main_dummy_footer.png" alt="">')
        document.write('</div>')
        document.write('</footer>')
    }
};
