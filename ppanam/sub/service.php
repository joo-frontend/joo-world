<?php require_once('/DK/hosting_users/ppanam/www/public_html/assets/elements/header.php'); ?>
    <script type="text/javascript" src="/assets/js/instafeed.min.js"></script>
    <script type="text/javascript">
        /*insta feed*/
        var userFeed = new Instafeed({
            get: 'user',
            userId: 4452673137,
            sortBy: "most-recent",
            limit: 9,
            resolution: "standard_resolution",
            // {{link}} : 게시물 링크, {{image}} : 사진 url, {{caption}} : 게시물 텍스트
            accessToken: '4452673137.132b358.b586364cfeaa48afafd04f70c47bc01d',
            template: '<div class="photo_insta"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>',
            filter: function(image) {
                return true;
            },
        });

        userFeed.run();
    </script>
    <div class="service_wra">
        <div class="service_type top">
            <ul>
                <li class="focus"><a href="/sub/service.php?hash=5">PLATFORM</a></li>
                <li><a href="/sub/service.php?hash=6">INFLUENCER MARKETING</a></li>
                <li><a href="/sub/service.php?hash=7">BRANDED VIDEO</a></li>
                <li><a href="/sub/service.php?hash=8">B2B SERVICE</a></li>
            </ul>
        </div>
        <a class="ask_btn" href="/sub/email.php"><img src="/assets/images/service/btn.png" alt=""></a>
        <div class="service_main_area">
            <div class="service_main">
                <div class="ppanam_service">
                    <div class="ppaname_box">
                    <p class="name f_ptf">PPANAM</p>
                    <p class="desc">빠남의 서비스는 K-BRAND의 가치를 <br>프랑스 및 유럽 현지 문화에 맞게 전달합니다<br><br>
                        <span>K-BRAND 에게 가장 시장에 맞는 적합한 진출전략을 제시합니다</span></p>
                        <p class="desc mobile">빠남의 서비스는<br> K-BRAND의 가치를 <br>프랑스 및 유럽 현지 문화에 <br>맞게 전달합니다<br><br>
                        <span>K-BRAND 에게 가장 시장에 맞는 <br>적합한 진출전략을 제시합니다</span></p>

                    </div>
                </div>
                <div class="img_main">
                    <img class="pc" src="/assets/images/service/graph1.png" alt="">
                    <img class="mobile" src="/assets/images/service/mobile/graph1.png" alt="">
                </div>
            </div>
        </div>
        <div class="service_type">
            <ul>
                <li class="focus"><a href="/sub/service.php?hash=5">PLATFORM</a></li>
                <li><a href="/sub/service.php?hash=6">INFLUENCER MARKETING</a></li>
                <li><a href="/sub/service.php?hash=7">BRANDED VIDEO</a></li>
                <li><a href="/sub/service.php?hash=8">B2B SERVICE</a></li>
            </ul>
        </div>
        <div class="service_section service_1" id="service1">
            <div class="title_service_box">
                <h1 class="service_title f_ptf">PLATFORM</h1>
                <h1 class="service_title_kor">플랫폼</h1>
                <ul class="type_platform clearfix">
                    <li class="focus"><a href="#">미디어</a></li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">커머스</a></li>
                    <li><a href="#">마케팅</a></li>
                </ul>
            </div>
            <div class="platform_contents">
                <div class="platform_detail clearfix active">
                    <p class="img_detail">
                        <img class="mobile_phone" src="/assets/images/service/bg.png" alt="">
                        <img class="phone" src="/assets/images/service/media.png" alt=""></p>
                    <div class="detail_box">
                        <p class="type_name f_ptf">MEDIA</p>
                        <p class="desc"><span>현지 인플루언서, 다양한 한국 미디어 채널이 <br>최신 한국 문화 정보를 실시간으로 제공합니다</span><br><br>
                            PPANAM과 파트너 인플루언서들이 직접 제공하는 <br>한국문화 컨텐츠, 브랜드 제품 리뷰, 그리고 파트너 언론사들과<br>
                            함께 불어로 된 최신 한국뉴스를 프랑스에 전달합니다</p>
                    </div>
                    <div class="platform_app_img">
                        <p>
                            <img src="/assets/images/service/img3.png" alt="">
                            <span>커뮤니티</span>
                        </p>
                       <!-- <p>
                            <img src="/assets/images/service/img4.png" alt="">
                            <span>커머스</span>
                        </p>-->
                        <p>
                            <img src="/assets/images/service/img5.png" alt="">
                            <span>마케팅</span>
                        </p>
                    </div>
                </div>
                <div class="platform_detail clearfix">
                    <p class="img_detail">
                        <img class="mobile_phone" src="/assets/images/service/bg.png" alt="">
                        <img class="phone" src="/assets/images/service/community.png" alt=""></p>
                    <div class="detail_box">
                        <p class="type_name f_ptf">COMMUNITY</p>
                        <p class="desc"><span>현지 인플루언서, 다양한 한국 미디어 채널이 <br>최신 한국 문화 정보를 실시간으로 제공합니다</span><br><br>
                            PPANAM과 파트너 인플루언서들이 직접 제공하는 <br>한국문화 컨텐츠, 브랜드 제품 리뷰, 그리고 파트너 언론사들과<br>
                            함께 불어로 된 최신 한국뉴스를 프랑스에 전달합니다</p>
                    </div>
                    <div class="platform_app_img">
                        <p>
                            <img src="/assets/images/service/img3.png" alt="">
                            <span>커뮤니티</span>
                        </p>
                        <!-- <p>
                             <img src="/assets/images/service/img4.png" alt="">
                             <span>커머스</span>
                         </p>-->
                        <p>
                            <img src="/assets/images/service/img5.png" alt="">
                            <span>마케팅</span>
                        </p>
                    </div>
                </div>
                <div class="platform_detail clearfix ">
                    <p class="img_detail">
                        <img class="mobile_phone" src="/assets/images/service/bg.png" alt="">
                        <img class="phone" src="/assets/images/service/community.png" alt=""></p>
                    <div class="detail_box">
                        <p class="type_name f_ptf">COMMERSE</p>
                        <p class="desc"><span>현지 인플루언서, 다양한 한국 미디어 채널이 <br>최신 한국 문화 정보를 실시간으로 제공합니다</span><br><br>
                            PPANAM과 파트너 인플루언서들이 직접 제공하는 <br>한국문화 컨텐츠, 브랜드 제품 리뷰, 그리고 파트너 언론사들과<br>
                            함께 불어로 된 최신 한국뉴스를 프랑스에 전달합니다</p>
                    </div>
                    <div class="platform_app_img">
                        <p>
                            <img src="/assets/images/service/img3.png" alt="">
                            <span>커뮤니티</span>
                        </p>
                        <!-- <p>
                             <img src="/assets/images/service/img4.png" alt="">
                             <span>커머스</span>
                         </p>-->
                        <p>
                            <img src="/assets/images/service/img5.png" alt="">
                            <span>마케팅</span>
                        </p>
                    </div>
                </div>
                <div class="platform_detail clearfix ">
                    <p class="img_detail">
                        <img class="mobile_phone" src="/assets/images/service/bg.png" alt="">
                        <img class="phone" src="/assets/images/service/marketing.png" alt=""></p>
                    <div class="detail_box">
                        <p class="type_name f_ptf">MARKETING</p>
                        <p class="desc"><span>현지 인플루언서, 다양한 한국 미디어 채널이 <br>최신 한국 문화 정보를 실시간으로 제공합니다</span><br><br>
                            PPANAM과 파트너 인플루언서들이 직접 제공하는 <br>한국문화 컨텐츠, 브랜드 제품 리뷰, 그리고 파트너 언론사들과<br>
                            함께 불어로 된 최신 한국뉴스를 프랑스에 전달합니다</p>
                    </div>
                    <div class="platform_app_img">
                        <p>
                            <img src="/assets/images/service/img3.png" alt="">
                            <span>커뮤니티</span>
                        </p>
                        <!--<p>
                            <img src="/assets/images/service/img4.png" alt="">
                            <span>커머스</span>
                        </p>-->
                        <p>
                            <img src="/assets/images/service/img5.png" alt="">
                            <span>마케팅</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="service_section service_2" id="service2">
            <div class="service_area">
                <div class="title_service_box">
                    <h1 class="service_title f_ptf">influencer<br>MARKETING</h1>
                    <h1 class="service_title_kor">인플루언서 마케팅</h1>
                    <p class="service_desc pc"><span>PPANAM은 K-브랜드의 가치를 프랑스 및 유럽 현지 문화에 맞게 전달합니다</span><br>
                        유럽 내 마케팅을 원하는 한국 기업과 현지 인플루언서들을 연결해주고 유럽시장으로 브랜드의 온전한 가치를 전달합니다</p>
                    <p class="service_desc mobile"><span>PPANAM은 K-브랜드의 가치를<br> 프랑스 및 유럽 현지 문화에 맞게<br> 전달합니다</span><br>
                        유럽 내 마케팅을 원하는 한국 기업과 <br>현지 인플루언서들을 연결해주고 <br>유럽시장으로 브랜드의 온전한 가치를 전달합니다</p>

                </div>
                <div class="marketing_detail">
                    <div class="marketing_box">
                        <div class="item_marketing">
                            <p class="num f_ptf">600,000</p>
                            <p class="desc">현재 파트너 인플루언서 팔로워 총합</p>
                        </div>
                        <div class="item_marketing">
                            <p class="num f_ptf">30</p>
                            <p class="desc">프랑스 현지 파트너 인플루언서</p>
                        </div>
                        <div class="item_marketing">
                            <p class="num f_ptf">1,000,000</p>
                            <p class="desc">파트너 인플루언서 컨텐츠를 통한 현재 총 브랜드 노출 횟수</p>
                        </div>
                    </div>
                    <div class="img_marketing"></div>
                </div>
            </div>
        </div>
        <div class="service_contents service2_1">
            <div class="service_section service_2_1">
                <div class="service_area">
                    <div class="title_service_box">
                        <p class="bar_title bar_white"><span>ㅣ</span> 프로세스 안내</p>
                    </div>
                    <div class="process_box">
                        <p class="process_img"><img src="/assets/images/service/icon4.png" alt=""></p>
                        <div class="detail_process">
                            <p class="step">견적확인</p>
                            <p class="step_desc"><span>PPANAM 인플루언서 마케팅 견적문의</span>를 통해<br>원하는 캠페인에 맞는 견적을 확인합니다</p>
                        </div>
                        <div class="detail_process">
                            <p class="step">매칭 및 선정</p>
                            <p class="step_desc"><span>PPANAM에서 제안하는 인플루언서를 선정</span>한 후<br>캠페인을 진행합니다</p>
                        </div>
                        <div class="detail_process">
                            <p class="step">포스팅</p>
                            <p class="step_desc">인플루언서는 브랜드로부터 제품을 배송받고 <br><span>도착으로부터 2주 내 컨텐츠를 게시</span>합니다</p>
                        </div>
                        <div class="detail_process">
                            <p class="step">결과 데이터 확인</p>
                            <p class="step_desc">캠페인 종료 후 PPANAM팀에서
                                <span>브랜드에 <br>포스팅 결과 데이터, 상세 설문 등 데이터를 취합 및 전달</span>합니다</p>
                        </div>

                    </div>
                    <div class="process_box mobile">
                        <div class="process_step">
                        <div class="detail_process">
                            <p class="step">견적확인</p>
                            <p class="step_desc"><span>PPANAM 인플루언서 마케팅 견적문의</span>를 통해<br>원하는 캠페인에 맞는 견적을 확인합니다</p>
                        </div>
                        <div class="detail_process">
                            <p class="step">매칭 및 선정</p>
                            <p class="step_desc"><span>PPANAM에서 제안하는 인플루언서를 선정</span>한 후<br>캠페인을 진행합니다</p>
                        </div>
                        <div class="detail_process">
                            <p class="step">포스팅</p>
                            <p class="step_desc">인플루언서는 브랜드로부터 제품을 배송받고 <br><span>도착으로부터 2주 내 컨텐츠를 게시</span>합니다</p>
                        </div>
                        <div class="detail_process">
                            <p class="step">결과 데이터 확인</p>
                            <p class="step_desc">캠페인 종료 후 PPANAM팀에서
                                <span>브랜드에 <br>포스팅 결과 데이터, 상세 설문 등 데이터를 취합 및 전달</span>합니다</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="service_contents service2_2">
            <div class="service_section service_2_2">
                <div class="service_area">
                    <div class="title_service_box">
                        <p class="bar_title "><span>ㅣ</span> PPANAM 마케팅의 기대효과</p>
                        <a href="https://www.instagram.com/ppanam_official/" target="_blank" class="insta">PPANAM 인스타그램 <img src="/assets/images/service/instagram.png"
                                                                    alt=""></a>
                    </div>
                    <div class="preview_insta clearfix" id="instafeed"></div>
                    <div class="title_service_box">
                        <p class="bar_title "><span>ㅣ</span> 인플루언서 판매 연계 시스템 소개</p>
                        <p class="service_desc"><span>홍보와 마케팅 만으로 고객에게 다가가기 어렵다구요?</span><br>
                            PPANAM은 K브랜드에 새로운 유럽진출의 솔루션을 제안합니다</p>
                    </div>
                    <div class="system_detail">
                        <p class="title">B2C 역직구 판매 연계</p>
                        <p class="detail">- 빠남 플랫폼 입점 시 프랑스 시장 인플루언서 통해 직접 판매연계</p>
                        <p class="detail">- 드롭쉬핑을 통한 b2b 연계 제공</p>
                    </div>
                    <div class="mobile_img_sysyem">
                        <img src="/assets/images/service/graph2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="service_section service_2_3">
            <div class="title_service_box">
                <p class="bar_title "><span>ㅣ</span> 고객 입점형</p>
                <p class="service_desc pc">PPANAM플랫폼 입점 또는 추천하는 인플루언서를 통해 직접 제품을 판매해보세요</p>
                <p class="service_desc mobile">PPANAM플랫폼 입점 또는 추천하는 인플루언서를 통해<br> 직접 제품을 판매해보세요</p>
            </div>
            <div class="customer_service_detail">
                <div class="customer_box">
                    <p class="imgBox"><img src="/assets/images/service/icon6.png" alt=""></p>
                    <div class="customer_detail">
                        <p class="num f_ptf">01</p>
                        <p class="feature">
                            PPANAM 팀이 귀사의 제품에 대한 모든 정보를 <br><span>현지 문화에 맞게 번역을 도와드립니다</span>
                        </p>
                        <p class="feature mobile">
                            PPANAM 팀이 <br>귀사의 제품에 대한 모든 정보를 <br><span>현지 문화에 맞게 <br>번역을 도와드립니다</span>
                        </p>

                    </div>
                </div>
                <div class="customer_box">
                    <p class="imgBox"><img src="/assets/images/service/icon7.png" alt=""></p>
                    <div class="customer_detail">
                        <p class="num f_ptf">02</p>
                        <p class="feature"><span>인플루언서 연계 및 커뮤니케이션 및 정산까지</span><br>관련된 모든 과정을 도와드립니다</p>
                        <p class="feature mobile"><span>인플루언서 연계 및 <br>커뮤니케이션 및 정산까지</span><br>관련된 모든 과정을 도와드립니다</p>
                    </div>
                </div>
                <div class="customer_box">
                    <p class="imgBox"><img src="/assets/images/service/icon8.png" alt=""></p>
                    <div class="customer_detail">
                        <p class="num f_ptf">03</p>
                        <p class="feature">유럽시장 최고의 전문가로 구성된 PPANAM팀이 <br><span>유럽 내 B2B 진출까지 케어 해드립니다</span></p>
                        <p class="feature mobile">유럽시장 최고의 전문가로<br> 구성된 PPANAM팀이 <br><span>유럽 내 B2B 진출까지<br> 케어 해드립니다</span></p>
                    </div>
                </div>

            </div>
        </div>
        <div class="service_section service_3" id="service3">
            <div class="title_service_box">
                <h1 class="service_title f_ptf">BRANDED<br>VIDEO PRODUCTION<br>SERVICE</h1>
                <h1 class="service_title_kor">브랜디드 영상 제작 서비스</h1>
                <p class="service_desc pc">이제 여러분의 브랜드의 가치를 유럽으로 전달하세요<br>
                    <span>PPANAM 프로덕션이 한국과 프랑스에서 직접 브랜디드 콘텐츠를 제작 해드립니다<br>
                    PPANAM 프로덕션팀은 10년간 수백편의 영상을 제작한 한국과 프랑스의 영상전문가들로 구성되어 있습니다</span></p>
                <p class="service_desc mobile">이제 여러분의 브랜드의 가치를 유럽으로 전달하세요<br>
                    <span>PPANAM 프로덕션이 한국과 프랑스에서<br> 직접 브랜디드 콘텐츠를 제작 해드립니다<br>
                    PPANAM 프로덕션팀은 10년간 수백편의 영상을 제작한 <br>한국과 프랑스의 영상전문가들로 구성되어 있습니다</span></p>

            </div>
        </div>
        <div class="service_contents service3_1">
            <div class="service_section service_3_1">
                <div class="service_area">
                    <p class="video_title f_ptf">WHAT WE DO</p>
                    <p class="desc_do">기획 촬영 제작까지 국내 및 프랑스 현지 로케이션까지<br>
                        모두 PPANAM을 통해 진행할 수 있습니다</p>
                    <p class="desc_do2">이제 PPANAM을 통해 직접 프랑스 현지에서<br>
                        귀사의 브랜드 홍보영상 및 브랜디드 컨텐츠를 제작하세요!</p>
                    <div class="do_ppanam">
                        <div class="item_do">
                            <img src="/assets/images/service/icon9.png" alt="">
                            <p class="detail"><span>한국과 프랑스 동시 로케이션으로 <br>진행가능한</span> 영상 제작 솔루션</p>
                        </div>
                        <div class="item_do">
                            <img src="/assets/images/service/icon11.png" alt="">
                            <p class="detail"><span>인터뷰,  커머셜,  바이럴,  컨텐츠,  웹시리즈까지</span><br>국경에 제한없는 홍보영상 제작 서비스 제공</p>
                        </div>
                        <div class="item_do">
                            <img src="/assets/images/service/icon12.png" alt="">
                            <p class="detail detail_pc">PPANAM PRODUCTION팀이 유럽 및 프랑스 문화에 맞추어 <br><span>영상 기획, 촬영, 및 편집까지 고객에 니즈에 맞춰 서비스 제공</span>
                            <p class="detail detail_mobile">PPANAM PRODUCTION팀이 <br>유럽 및 프랑스 문화에 맞추어<br> <span>영상 기획, 촬영, 및 편집까지<br> 고객에 니즈에 맞춰 서비스 제공</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="service_section service_4" id="service4">
            <div class="service_area">
                <div class="title_service_box">
                    <h1 class="service_title f_ptf">B2B SOLUTION</h1>
                    <h1 class="service_title_kor">B2B 솔루션</h1>
                    <p class="service_desc pc"><span>PPANAM은 한국 브랜드의 가치를 알리며 직접 시장으로의 진출을 돕습니다<br>
                    현지 마케팅과 동시에 바이어 컨택부터 안전한 시장진출까지 </span><br>PPANAM을 통해 가장 확실하게 해외판로를 개척할 수 있습니다</p>
                    <p class="service_desc mobile"><span>PPANAM은 한국 브랜드의 가치를 알리며 <br>직접 시장으로의 진출을 돕습니다<br>
                    현지 마케팅과 동시에 바이어 컨택부터 안전한 시장진출까지 </span><br>PPANAM을 통해 가장 확실하게 해외판로를 개척할 수 있습니다</p>

                </div>
                <div class="soultion_txt_box">
                <div class="solution_txt">
                    <p class="pc">귀사의<br>유럽시장 진출을 위한<br>든든한 파트너가 되겠습니다</p>
                    <p class="mobile">귀사의<br>유럽시장 진출을 위한<br>든든한 파트너가 <br>되겠습니다</p>

                </div>
                </div>
            </div>
        </div>
        <div class="service_section service_4_1">
            <div class="service_area">
                <div class="msg_solution">
                    <p class="title">PPANAM은<br>중소기업의 성공적인<br>유럽시장 진출을 돕고자 합니다</p>
                    <p class="desc"><span>유럽 소비재 & 온라인 시장<br>
                    규모 2위의 프랑스 시장을 중심</span>으로,<br>
                        PPANAM과 유럽으로 진출하세요!</p>
                </div>
                <div class="solution_detail">
                    <div class="item_solution clearfix">
                        <span class="imgBox"><img src="/assets/images/service/icon13.png" alt=""></span>
                        <div class="detail_box">
                            <p class="title">소비재 유통시장 규모 전세계 1위, 유럽</p>
                            <div class="detail">
                                <p>
                                    - 유럽 소비재 유통시장 규모 3.6조 달러, <span>전세계의 4분의 1 수준</span><br>
                                    - 유럽 소비재 유통시장 규모는 <span>전세계 1위이며, 세계 시장의 약 26%수준</span><br>
                                    - Kotra “ 진입장벽은 높으나 포기할 수 없는 시장”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item_solution clearfix">
                        <span class="imgBox"><img src="/assets/images/service/icon14.png" alt=""></span>
                        <div class="detail_box">
                            <p class="title">유럽 2위의 소비재 시장, 프랑스 (4,395 억)</p>
                            <div class="detail"><p>2017년 서유럽 소비재 유통시장은 약 2조 6,120억 유로 규모로 <span>전체 유럽의 80.8 %</span></p>
                                <p class="blue">서유럽의 시장규모는 전체 유통시장의 80% 수준이며,<br>
                                    상위 5개국의 시장규모가 전체의 52%를 차지함,<br>
                                    그 중 프랑스는 2위 (4,395억 유로)로 지난 5년간 꾸준한 상승세<br>
                                    온라인 또한 최근 5년간 연평균 12%씩 상승 (363억 유로),<br>
                                    2017년 온라인 결제액은 817억 유로 (프랑스전자상거래협회(FEVAD) </p></div>
                        </div>
                    </div>
                    <div class="item_solution clearfix">
                        <span class="imgBox"><img src="/assets/images/service/icon15.png" alt=""></span>
                        <div class="detail_box">
                            <p class="title">한국 브랜드의 유럽 시장 가능성?</p>
                            <div class="detail"><p class="mb_txt">유럽의 한국 브랜드에 대한 관심! <span>지금이 때입니다</span></p>
                                <p class="mb_txt">- 2017년 유럽 수출액 500억 유로 돌파로, <span>EU 수입시장 점유율 기준 한국은<br>
                            8위로 17년 대유럽 수출은 전년대비 20% 증가!</span></p>
                                <p>- 유아용품 200%, 안경 63%, 화장품 42%, 패션잡화 11%,<br>
                                    식품류 10% 등 <span>주요 한국산 소비재 수출 증가</span></p>
                                <p class="line">
                                    프랑스 2대 화장품 전문 대형유통업체 M사 CEO
                                </p>
                                <p class="blue">“이제는 한국도 우수한 재료와 디자인으로 승부할 때이다<br>
                                    한국의 고품질 천연성분, 단순하고 고급스러운 디자인과<br>
                                    다기능성 컨셉은 유럽 소비자들에게 인기몰이 중이다” </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="service_contents service4_2">
            <div class="service_section service_4_2">
                <div class="service_area">
                    <p class="agency">프랑스 시장의 전문가로 구성된 PPANAM팀이</p>
                    <p class="agency_desc">PPANAM은 브랜드의 든든한 파트너이자 에이전트로<br>
                        초기 시장 진입부터 시장내 브랜드가<br>
                        성공적으로 안착할 때까지 확실히 케어 해드립니다</p>
                    <ul class="step_care clearfix">
                        <li class="step1 focus"><p><span>STEP.1</span>시장조사</p></li>
                        <li class="mobile_detail_agency active">
                            <img src="/assets/images/service/icon16.png" alt="">
                            <p>시장 가능성, 소비자 반응 조사, 컨설팅, 인플루언서<br>상세 리뷰, 온라인 반응 조사 결과 제공</p>
                        </li>
                        <li class="step2"><p><span>STEP.2</span>현지 판로 개척</p></li>
                        <li class="mobile_detail_agency">
                            <img src="/assets/images/service/icon16.png" alt="">
                            <p>시장 가능성, 소비자 반응 조사, 컨설팅, 인플루언서<br>상세 리뷰, 온라인 반응 조사 결과 제공</p>
                        </li>
                        <li class="step3"><p><span>STEP.3</span>홍보 및 마케팅 대행</p></li>
                        <li class="mobile_detail_agency">
                            <img src="/assets/images/service/icon16.png" alt="">
                            <p>시장 가능성, 소비자 반응 조사, 컨설팅, 인플루언서<br>상세 리뷰, 온라인 반응 조사 결과 제공</p>
                        </li>
                    </ul>
                    <div class="agency_detail_box">
                        <div class="item_agency active">
                            <img src="/assets/images/service/icon16.png" alt="">
                            <p>시장 가능성, 소비자 반응 조사, 컨설팅, 인플루언서 상세 리뷰, 온라인 반응 조사 결과 제공</p>
                        </div>
                        <div class="item_agency">
                            <img src="/assets/images/service/icon16.png" alt="">
                            <p>현지 판로 개척</p>
                        </div>
                        <div class="item_agency">
                            <img src="/assets/images/service/icon16.png" alt="">
                            <p>홍보 및 마케팅 대행</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
            <div class="service_section service_4_3">
                <div class="service_area">
                    <div class="title_b2b">PPANAM<br>B2B 서비스 이용시<br>
                        얻을 수 있는 기대 효과
                    </div>
                    <div class="title_b2b mobile">PPANAM<br>B2B 서비스 이용시 얻을 수 있는 기대 효과</div>

                    <div class="b2b_detail">
                        <div class="b2b_box">
                        <div class="item_b2b">
                            <p class="feature">현지 문화에 맞는<br>브랜딩 제안</p>
                            <p class="desc pc">- 초기 입점 수수료 비용 무료 & 프랑스 시장으로의 빠른 네트워크 확장<br>
                                - Made In Korea, 한국을 대표하는 브랜드로 포지셔닝</p>
                            <p class="desc mobile">- 초기 입점 수수료 비용 무료 &<br> 프랑스 시장으로의 빠른 네트워크 확장<br>
                                - Made In Korea, 한국을 대표하는 <br>브랜드로 포지셔닝</p>

                        </div>
                        <div class="item_b2b">
                            <p class="feature">비디오<br>컨텐츠 마케팅</p>
                            <p class="desc pc">인플루언서 컨텐츠 통한 시장 내 브랜드 인지도 상승</p>
                            <p class="desc mobile">인플루언서 컨텐츠 통한<br>시장 내 브랜드 인지도 상승</p>
                        </div>
                        <div class="item_b2b">
                            <p class="feature">유럽 내 현지<br>커뮤니케이션</p>
                            <p class="desc pc">현지 고객들의 리뷰를 통해 현지 잠재고객 & 바이어에게 브랜드의 장점 및 가치 어필 가능</p>
                            <p class="desc mobile">현지 고객들의 리뷰를 통해 현지<br> 잠재고객 & 바이어에게<br>브랜드의 장점 및 가치 어필 가능</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service_section service_4_4">
                <div class="service_area">
                    <div class="title_b2b">B2B솔루션<br>단계별 진행 사항</div>
                    <div class="title_b2b mobile">B2B솔루션 단계별 진행 사항</div>
                    <p class="b2b_solution_txt"> PPANAM은 다음과 같은 단계를 통해<br>
                        귀사의 성공적인 프랑스 및 유럽시장 진입을 돕습니다</p>
                    <div class="b2b_solution">
                        <div class="item_b2b_2">
                            <div class="txt_b2b">
                                <p class="num f_ptf">01</p>
                                <p class="name">시장조사</p>
                                <p class="detail pc">시장 가능성, 소비자 반응 조사, 컨설팅,<br>
                                    인플루언서 상세 리뷰, 온라인 반응 조사 결과 제공</p>
                                <p class="detail mobile">시장 가능성, 소비자 반응 조사, 컨설팅,<br>
                                    인플루언서 상세 리뷰, <br>온라인 반응 조사 결과 제공</p>
                            </div>
                            <p class="image_solution"><img src="/assets/images/service/icon17.png" alt=""></p>
                        </div>
                        <div class="item_b2b_2">
                            <div class="txt_b2b">
                            <p class="num f_ptf">02</p>
                            <p class="name">현지 판로 개척</p>
                            <p class="detail">현지 바이어 매칭,<br> 커뮤니케이션 대행 및<br>
                                각종 서류 및 절차 대행</p>
                            </div>
                            <p class="image_solution"><img src="/assets/images/service/icon18.png" alt=""></p>
                        </div>
                        <div class="item_b2b_2">
                            <div class="txt_b2b">
                            <p class="num f_ptf">03</p>
                            <p class="name">홍보 및 마케팅 대행 </p>
                            <p class="detail pc">현지 언론 기사 송출, 마케팅 업체 연결 및 홍보,<br>
                                인플루언서 마케팅 진행 대행</p>
                            <p class="detail mobile">현지 언론 기사 송출, <br>마케팅 업체 연결 및 홍보,<br>
                                인플루언서 마케팅 진행 대행</p>
                            </div>
                            <p class="image_solution"><img src="/assets/images/service/icon19.png" alt=""></p>
                        </div>

                    </div>
                </div>
            </div>
        <div class="service_section service_5">
            <p class="partner_txt">당신의 성공적인 유럽시장 진출 파트너</p>
            <img src="/assets/images/service/logo.png" alt="">
        </div>
    </div>

    <script>
        $(document).ready(function () {
            $(".gnb li").removeClass("focus");
           $(".gnb li:nth-child(2)").addClass("focus");
        });
        $(window).scroll(function () {
            var windowHeight = $(".service_main").outerHeight();
            var currentScroll = $(window).scrollTop();
            if(currentScroll > windowHeight){
                $(".service_type").addClass("fixed");
            }else {
                $(".service_type").removeClass("fixed");
            }
        });


        $(window).scroll(function () {
            var headerHeight = $(".header_wra").height() + 10;
            var current = $(document).scrollTop();
            var service1 = $("#service1").offset();
            var service2 = $("#service2").offset();
            var service3 = $("#service3").offset();
            var service4 = $("#service4").offset();
            if(service1.top - headerHeight <= current){
                $(".service_type li").removeClass("focus");
                $(".service_type li:nth-child(1)").addClass("focus");
                if(service2.top - headerHeight <= current){
                    $(".service_type li").removeClass("focus");
                    $(".service_type li:nth-child(2)").addClass("focus");
                    if(service3.top - headerHeight <= current){
                        $(".service_type li").removeClass("focus");
                        $(".service_type li:nth-child(3)").addClass("focus");
                        if(service4.top - headerHeight <= current){
                            $(".service_type li").removeClass("focus");
                            $(".service_type li:nth-child(4)").addClass("focus");
                        }
                    }
                }
            }else {
                $(".service_type li").removeClass("focus");
                $(".service_type li:nth-child(1)").addClass("focus");
            }
        });


    </script>

<?php require_once('/DK/hosting_users/ppanam/www/public_html/assets/elements/footer.php'); ?>