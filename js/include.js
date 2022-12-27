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
        document.write('<a href="/html/about/ceo.html">');
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
        document.write('<a href="/html/data/price_data_room.html">');
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
        document.write('<img src="/img/common/ico-global-nav05.png" alt="">');
        document.write('<p>고객센터</p>');
        document.write('</a>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        document.write('<div class="sub-nav">');
        document.write('<ul>');
        document.write('<li class="all-menu">');
        document.write('<a href="#none">전체품목</a>');
        document.write('<div class="all-menu-list">');
        document.write('<div class="column">');
        document.write('<div class="section">');
        document.write('<p class="link-tit">저고압기기</p>');
        document.write('<a href="#none">배선용차단기 (MCCB)</a>');
        document.write('<a href="#none">누전차단기 (ELCB)</a>');
        document.write('<a href="#none">기중차단기 (ACB)</a>');
        document.write('<a href="#none">전자접촉기 & 전자개폐기 (MS)</a>');
        document.write('<a href="#none">모터보호용 배선용차단기 (MMS)</a>');
        document.write('<a href="#none">전자식 모터보호계전기</a>');
        document.write('<a href="#none">산업용 분전반</a>');
        document.write('<a href="#none">회로보호기</a>');
        document.write('<a href="#none">서지보호기</a>');
        document.write('<a href="#none">진공차단기</a>');
        document.write('<a href="#none">진공인터럽터</a>');
        document.write('<a href="#none">고압전자접촉기</a>');
        document.write('<a href="#none">한류형 전력퓨즈</a>');
        document.write('<a href="#none">기중절연 부하 개폐기(LBS)</a>');
        document.write('<a href="#none">고장구간 자동 개폐기 (ASS)</a>');
        document.write('<a href="#none">자동부하 전환 개폐기 (ALTS)</a>');
        document.write('<a href="#none">배전자동화용 부하개폐기 (S-LBS, G-LBS)</a>');
        document.write('</div>');
        document.write('</div>');
        document.write('<div class="column">');
        document.write('<div class="section">');
        document.write('<p class="link-tit">인버터</p>');
        document.write('<a href="#none">LS 저압인버너</a>');
        document.write('<a href="#none">LS 고압인버너</a>');
        document.write('<a href="#none">LS 효율인버너</a>');
        document.write('<a href="#none">ESCO</a>');
        document.write('<a href="#none">LS 드라이브 판넬</a>');
        document.write('</div>');
        document.write('<div class="section">');
        document.write('<p class="link-tit">PLC</p>');
        document.write('<a href="#none">XGT 시리즈</a>');
        document.write('<a href="#none">XGB 시리즈</a>');
        document.write('<a href="#none">XGT 특수모듈</a>');
        document.write('<a href="#none">XGT 통신모듈</a>');
        document.write('<a href="#none">MASTER-K 시리즈</a>');
        document.write('<a href="#none">GLOFA_GM 시리즈</a>');
        document.write('<a href="#none">Smart I/O 시리즈</a>');
        document.write('<a href="#none">특수/통신 설정 소프트웨어 툴 응용사례</a>');
        document.write('<a href="#none">XGS (Safety PLC) 시리즈</a>');
        document.write('</div>');
        document.write('</div>');
        document.write('<div class="column">');
        document.write('<div class="section">');
        document.write('<p class="link-tit">Servo / Motion</p>');
        document.write('<a href="#none">XDA 시리즈 (XGT Servo System)</a>');
        document.write('<a href="#none">XDL 시리즈</a>');
        document.write('<a href="#none">모션콘트롤</a>');
        document.write('<a href="#none">XGT 위치결정모듈</a>');
        document.write('<a href="#none">XPM (신형 위치결정모듈)</a>');
        document.write('<a href="#none">XGT 위치결정모듈 (Network Type)</a>');
        document.write('</div>');
        document.write('<div class="section">');
        document.write('<p class="link-tit">태양광인버터 EV Realay</p>');
        document.write('<a href="#none">LS산전 태양광인버터</a>');
        document.write('<a href="#none">동양이엔피 태양광인버터</a>');
        document.write('<a href="#none">Relay</a>');
        document.write('</div>');
        document.write('<div class="section">');
        document.write('<p class="link-tit">HMI</p>');
        document.write('<a href="#none">XGT Panel</a>');
        document.write('<a href="#none">XGT Infou</a>');
        document.write('</div>');
        document.write('<div class="section">');
        document.write('<p class="link-tit">계량기기</p>');
        document.write('<a href="#none">디지털 전력량계</a>');
        document.write('<a href="#none">최대수요전력 제어기 (WDC-3000)</a>');
        document.write('<a href="#none">원격검침시스템 (AMRS)</a>');
        document.write('</div>');
        document.write('</div>');
        document.write('<div class="column">');
        document.write('<div class="section">');
        document.write('<p class="link-tit">계전 · 계측기기</p>');
        document.write('<a href="#none">다기능 디지털전력보호 감시장</a>');
        document.write('<a href="#none">디지털 보호계전</a>');
        document.write('<a href="#none">IMC-III(Intelligent Motor Controller)</a>');
        document.write('<a href="#none">디지털 집중표시 제어장</a>');
        document.write('<a href="#none">프로토콜 변환기기 (GMPC)</a>');
        document.write('<a href="#none">micro RTU</a>');
        document.write('<a href="#none">터치웹서버 (Touch Web Server)</a>');
        document.write('<a href="#none">SAG Protector</a>');
        document.write('</div>');
        document.write('<div class="section">');
        document.write('<p class="link-tit">한국자동제어 KACON</p>');
        document.write('<a href="#none">자동화제어기기</a>');
        document.write('<a href="#none">모터기동보호기기</a>');
        document.write('<a href="#none">신호제어기기</a>');
        document.write('<a href="#none">통작탐지기기</a>');
        document.write('<a href="#none">기타배선기기</a>');
        document.write('<a href="#none">태양광시스템</a>');
        document.write('</div>');
        document.write('<div class="section">');
        document.write('<p class="link-tit">제어기기 LGFA</p>');
        document.write('<a href="#none">태양광접속반 및 기타 제어기기</a>');
        document.write('</div>');
        document.write('<div class="section">');
        document.write('<p class="link-tit">기타기기</p>');
        document.write('<a href="#none">기타 제어기기</a>');
        document.write('</div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</li>');
        document.write('<li class="active">');
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
