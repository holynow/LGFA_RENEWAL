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
        // [dev] 마이페이지는 로그인 했을경우 회원가입버튼이 숨겨지고 보여져야 합니다.
        document.write('<a href="/html/member/mypage.html">마이페이지</a>');
        document.write('<a href="/html/member/login.html">로그인</a>');
        document.write('<a href="/html/member/join.html">회원가입</a>');
        document.write('<a href="/html/shop/cart.html">장바구니</a>');
        document.write('<a href="http://shop.hinetservice.co.kr/" class="btn-round-green-h40" target="_blank">인트라넷</a>');
        document.write('</div>');
        document.write('</div>');
        document.write('</div>');
        document.write('<!-- nav -->');
        document.write('<nav class="nav-wrap">');
        document.write('<div class="global-nav">');
        document.write('<ul>');
        document.write('<li>');
        document.write('<a href="/html/about/ceo.html">');
        document.write('<img src="/img/common/ico-nav-10.png" alt="">');
        document.write('<img src="/img/common/ico-nav-10-on.png" alt="" class="on">');
        document.write('<p>회사소개</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/">');
        document.write('<img src="/img/common/ico-nav-9.png" alt="">');
        document.write('<img src="/img/common/ico-nav-9.png" alt="" class="on">');
        document.write('<p>할인상품</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/customer/estimate_insert.html">');
        document.write('<img src="/img/common/ico-nav-0.png" alt="">');
        document.write('<img src="/img/common/ico-nav-0-on.png" alt="" class="on">');
        document.write('<p>견적문의</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/shop/order_search.html">');
        document.write('<img src="/img/common/ico-nav-1.png" alt="">');
        document.write('<img src="/img/common/ico-nav-1-on.png" alt="" class="on">');
        document.write('<p>주문조회</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/customer/faq.html">');
        document.write('<img src="/img/common/ico-nav-2-on.png" alt="">');
        document.write('<img src="/img/common/ico-nav-2-on.png" alt="" class="on">');
        document.write('<p>고객센터</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/html/data/data_room.html">');
        document.write('<img src="/img/common/ico-nav-5.png" alt="">');
        document.write('<img src="/img/common/ico-nav-5-on.png" alt="" class="on">');
        document.write('<p>자료실</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<img src="/img/common/ico-nav-4.png" alt="">');
        document.write('<img src="/img/common/ico-nav-4-on.png" alt="" class="on">');
        document.write('<p>응용도면</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<img src="/img/common/ico-nav-8.png" alt="">');
        document.write('<img src="/img/common/ico-nav-8-on.png" alt="" class="on">');
        document.write('<p>타제품 참고단가</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        
        document.write('</nav>');
        document.write('</header>');
    },
    style: () => {
        document.write('<link rel="stylesheet" href="/css/common.css"/>');
        document.write('<link rel="stylesheet" href="/css/swiper-bundle.min.css"/>')
        document.write('<link rel="stylesheet" href="/css/ui.css"/>');
    },
    script: () => {
        document.write('<script src="https://code.jquery.com/jquery-3.6.3.min.js" defer></script>')
        document.write('<script src="/js/swiper-bundle.min.js" defer></script>')
        document.write('<script src="/js/ui.js" defer></script>')
    },
    footer: () => {
        document.write('<footer id="footer">');
        document.write('<div class="footer-wrap">');
        document.write('<div class="footer-top">');
        document.write('<div class="inner-width">');
        document.write('<a href="/html/util/policy_01.html">정보통신망이용촉진 및 정보보호등에 관한 법률</a>');
        document.write('<a href="/html/util/policy_02.html">인터넷사이버몰표준약관</a>');
        document.write('<a href="/html/util/policy_03.html">개인정보처리 방침</a>');
        document.write('</div>');
        document.write('</div>');
        document.write('<div class="footer-cont">');
        document.write('<div class="inner-width">');
        document.write('<h5 class="comp-name">엘티일렉트릭(주)</h5>');
        document.write('<ul class="footer-list">');
        document.write('<li>');
        document.write('<dl>');
        document.write('<dt>주소</dt>');
        document.write('<dd>경기도 시흥시 엠티브이 25로 20번길 13</dd>');
        document.write('</dl>');
        document.write('</li>');
        document.write('<li>');
        document.write('<dl>');
        document.write('<dt>TEL</dt>');
        document.write('<dd>031. 433. 9000</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>FAX</dt>');
        document.write('<dd>031. 433. 0908</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>E-mail</dt>');
        document.write('<dd>itbeco@itbeco.com</dd>');
        document.write('</dl>');
        document.write('</li>');
        document.write('<li>');
        document.write('<dl>');
        document.write('<dt>대표</dt>');
        document.write('<dd>김화영</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>개인정보관리책임자</dt>');
        document.write('<dd>김화영</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>사업자번호</dt>');
        document.write('<dd>134-81-49042</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>통신판매</dt>');
        document.write('<dd>시흥 제 609호</dd>');
        document.write('</dl>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</footer>');
    }
};
