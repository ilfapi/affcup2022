(function ($) {
    "use strict";
    console.log("RUN ON", window.screen.availHeight - (window.outerHeight - window.innerHeight));

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $(document).ready(function () {
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
            return false;
        });

        $('.a-timeline-match').click(function (e) {
            removeActive();
            $(".timeline-match").css("display","block");
            $(".statistic").css("display","none");
            $(".formation-match").css("display","none");
            $(this).parent().addClass("is-active")
        });

        $('.a-statistic').click(function (e) {
            removeActive();
            $(".timeline-match").css("display","none");
            $(".statistic").css("display","block");
            $(".formation-match").css("display","none");
            $(this).parent().addClass("is-active")
        });

        $('.a-formation').click(function (e) {
            removeActive();
            $(".timeline-match").css("display","none");
            $(".statistic").css("display","none");
            $(".formation-match").css("display","block");
            $(this).parent().addClass("is-active")
        });

        $('.cd-popup').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
                event.preventDefault();
                $(this).removeClass('is-visible');
                $("body").css("overflow-y", "auto");
                removeActive();
                setActive();
            }
        });

        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popup').removeClass('is-visible');
                $("body").css("overflow-y", "auto");
                removeActive();
                setActive();
            }
        });

        $(document).on('click', 'a.show-match', function(event){
            var fixture_id = this.attributes.fixture_id.value;
            var team_home_id = this.attributes.team_home.value;
            var team_away_id = this.attributes.team_away.value;
            console.log(fixture_id)

            openpopup("show-match");
            eventWC(fixture_id) 
            .then(rs => {
                renderDetailMatch(rs);
            })
            .catch(err => console.log(err))

            statsWC(fixture_id) 
            .then(rs => {
                if (typeof rs != "undefined") {
                    renderStats(rs.statistic);
                    var formation = loopFormation(rs, team_home_id, team_away_id);
                    console.log(formation)
                    renderFormation(formation);
                };
            })
            .catch(err => console.log(err))
        });

        standingWC() 
        .then(rs => {
            // console.log(rs.data)
            // var jsonStanding = loopData(rs.data, "standing")
            var jsonStanding = [
                {
                    "group": "A",
                    "team_id": "1564",
                    "rank": "1",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Thai_Lan.png",
                    "team": "Thái Lan",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "A",
                    "team_id": "1555",
                    "rank": "2",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Philippines.png",
                    "team": "Philippines",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                    },
                {
                    "group": "A",
                    "team_id": "1571",
                    "rank": "3",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Indonesia.png",
                    "team": "Indonesia",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "A",
                    "team_id": "1543",
                    "rank": "4",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Campuchia.png",
                    "team": "Campuchia",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "A",
                    "team_id": "5538",
                    "rank": "5",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Brunei.png",
                    "team": "Brunei",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "B",
                    "team_id": "1542",
                    "rank": "1",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Viet_Nam.png",
                    "team": "Việt Nam",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "B",
                    "team_id": "1538",
                    "rank": "2",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Malaysia.png",
                    "team": "Malaysia",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "B",
                    "team_id": "1546",
                    "rank": "3",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Singapore.png",
                    "team": "Singapore",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "B",
                    "team_id": "1556",
                    "rank": "4",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Myanmar.png",
                    "team": "Myanmar",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                },
                {
                    "group": "B",
                    "team_id": "1558",
                    "rank": "5",
                    "logo": "https://s1.vnecdn.net/vnexpress/restruct/i/v687/flag/Lao.png",
                    "team": "Lào",
                    "tran": "0",
                    "thang": "0",
                    "hoa": "0",
                    "bai": "0",
                    "hieu-so": "0",
                    "diem": "0",
                    "phong_do": "----"
                }
            ];
            localStorage.setItem("standing", JSON.stringify(jsonStanding));
            // renderBXH(jsonStanding);
        })
        .catch(err => console.log(err))

        fixtureWC()
        .then(rs => {
            console.log(rs)
            var jsonFixture = loopData(rs.data, "fixture")
            renderLTD(jsonFixture.schedule)
            renderKQ(jsonFixture.match_results)
        })
        .catch(err => console.log(err))

        async function standingWC() {
            // $.get("https://vnexpress.net/microservice/sheet/type/bxh_aff", function(data, status){
            //     console.log("Data: " + data + "\nStatus: " + status);
            // });
            // let url = "https://vnexpress.net/microservice/sheet/type/bxh_aff";
            // const response = await axios.get(url)
            // let rs = response.data.data;
            // let keys = Object.keys(rs);
            // return rs[keys[0]];
        }

        async function fixtureWC() {
            let url = "https://gw.vnexpress.net/football/fixture?league_id=4798";
            const response = await axios.get(url)
            let rs = response.data.data;
            let keys = Object.keys(rs);
            return rs[keys[0]];
        }

        async function eventWC(id) {
            let url = "https://gw.vnexpress.net/football/fixture/event?fixture_id="+id;
            const response = await axios.get(url)
            let rs = response.data.data;
            let keys = Object.keys(rs);
            return rs[keys[0]];
        }

        async function statsWC(id) {
            let url = "https://gw.vnexpress.net/football/fixture/stats?fixture_id="+id;
            const response = await axios.get(url)
            let rs = response.data.data;
            return rs;
        }

        async function getImgPlayer(name){
            let url = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Cristiano Ronaldo";
            const response = await axios.get(url)
            let rs = response.data;
            return rs;
        }

        function loopData(data, type){
            var array_result = [];
            var array_result_2 = [];

            switch (type) {
                case 'fixture':
                    let i_fixture=0;
                    let i_fixture_2=0;

                    while(i_fixture < data.length) {
                        if (typeof data[i_fixture].elapsed != "undefined") {
                            var tepm_date_time = data[i_fixture].event_date.split("T");
                            var index_fixture = (array_result_2.map(function(x){ return x.event_date; })).indexOf(tepm_date_time[0]);
                            if (index_fixture != -1) {
                                array_result_2[index_fixture].data.push(data[i_fixture]);
                            }else{
                                array_result_2 = [...array_result_2, {"event_date" : tepm_date_time[0],  "data" : new Array(data[i_fixture])}];
                            }
                        }else{
                            var tepm_date_time = data[i_fixture].event_date.split("T");
                            var index_fixture = (array_result.map(function(x){ return x.event_date; })).indexOf(tepm_date_time[0]);
                            if (index_fixture != -1) {
                                array_result[index_fixture].data.push(data[i_fixture]);
                            }else{
                                array_result = [...array_result, {"event_date" : tepm_date_time[0],  "data" : new Array(data[i_fixture])}];
                            }
                        }
                        i_fixture++;
                    }
                    return {"schedule": array_result, "match_results": array_result_2}
                break;
                case 'standing':
                    let i_standing=0;
                    while(i_standing < data.length) {
                        var index_standing = findWithAttr(array_result, "group_id", "group_name", data[i_standing].group_id, data[i_standing].group);
                        if (index_standing != -1) {
                            array_result[index_standing].data.push(data[i_standing]);
                        }else{
                            array_result = [...array_result, {"group_id" : data[i_standing].group_id, "group_name" : data[i_standing].group, "data" : new Array(data[i_standing])}];
                        }
                        i_standing++;
                    }
                    return array_result
                break;
                case 'formation':
                    let i_formation=0;
                    while(i_formation < data.length) {
                        var index_formation = (array_result.map(function(x){ return x.position; })).indexOf(data[i_formation].position);
                        if (index_formation != -1) {
                            array_result[index_formation].data.push(data[i_formation]);
                        }else{
                            array_result = [...array_result, {"position" : data[i_formation].position, "data" : new Array(data[i_formation])}];
                        }
                        i_formation++;
                    }
                    return array_result
                break;
            }

        }

        function loopElapsed(data) {
            var array_result = [];
            let i_elapsed=0;
            while(i_elapsed < data.length) {
                if (typeof data[i_elapsed].elapsed_plus != "undefined" && (data[i_elapsed].elapsed + data[i_elapsed].elapsed_plus) > 120) {
                    var index_elapsed = findWithAttr(array_result, "elapsed", "typeOf", data[i_elapsed].elapsed, 'goal_pen');
                    if (index_elapsed != -1) {
                        array_result[index_elapsed].data.push(data[i_elapsed]);
                    }else{
                        array_result = [...array_result, {"elapsed" : data[i_elapsed].elapsed, "typeOf": "goal_pen", "data" : new Array(data[i_elapsed])}];
                    }
                }else {
                    var index_elapsed = (array_result.map(function(x){ return x.elapsed; })).indexOf(data[i_elapsed].elapsed);
                    if (index_elapsed != -1) {
                        array_result[index_elapsed].data.push(data[i_elapsed]);
                    }else{
                        array_result = [...array_result, {"elapsed" : data[i_elapsed].elapsed, "typeOf": data[i_elapsed].type.toLowerCase(), "data" : new Array(data[i_elapsed])}];
                    }
                }
                i_elapsed++;
            }
            return array_result.reverse()
        }

        function findWithAttr(array, attr_1, attr_2, value_1, value_2) {
            var count_data = array.length;
            for(var i = 0; i < count_data; i += 1) {
                if(array[i][attr_1] == value_1 && value_2 == array[i][attr_2]) {
                    return i;
                }
            }
            return -1;
        }

        function renderKQ(data){
            var now = dateNow();
            var html = "";
            var temp = data;
            var dataKQ = null;
            dataKQ = temp.sort(function(a, b) { var c = new Date(a.event_date); var d = new Date(b.event_date); return d - c; });

            if (dataKQ != null) {
                dataKQ.forEach(function (ele, index) {
                    var title_date = dayOfWeek(ele.event_date) + ", " + convertDMY(ele.event_date);
                    html += `<h5 class="d-inline-block text-primary-fix text-uppercase border-bottom border-5">${title_date}</h5>`;
                    ele.data.forEach(function (value) {
                        const { fixture_id, elapsed, event_timestamp, home_team, away_team, score, round, round_int} = value;
                        var time = getTimeFromDate(event_timestamp);
                        var teamIdHome = home_team.team_id;
                        var teamIdAway = away_team.team_id;
                        var teamNameHome = home_team.team_name;
                        var teamNameAway = away_team.team_name;
                        var teamLogoHome = home_team.logo;
                        var teamLogoAway = away_team.logo;
                        var FT = score.fulltime;
                        var HT = score.halftime;
                        var groupName = '';
                        if (typeof round != "undefined"){
                            switch (round) {
                                case "Round of 16":
                                    groupName = "Vòng 1/8";
                                    break;
                                case "Quarter-finals":
                                    groupName = "Tứ kết";
                                    break;
                                case "Semi-finals":
                                    groupName = "Bán kết";
                                    break;
                                case "Finals":
                                    groupName = "Chung kết";
                                    break;
                                default:
                                    groupName = (getGroupName(teamIdHome) != null) ? getGroupName(teamIdHome) : ""
                                    break;
                            }
                        }

                        if (typeof elapsed != "undefined"){
                            html += `
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column">
                                        <h4>${groupName}</h4>
                                        <div class="col">
                                            <div class="container_a">
                                                <div class="home">
                                                    <span class="name-home">${teamNameHome}</span>
                                                    <img src="${teamLogoHome}" alt="${teamNameHome} " width="25" height="20" class="img-fluid" />
                                                </div>
                                                <strong style="margin-top:5px">${FT}</strong>
                                                <div class="visit">
                                                    <img src="${teamLogoAway}" alt="${teamNameAway}" width="25" height="20" class="img-fluid" />
                                                    <span class="name-away">${teamNameAway}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="btn btn-lg btn-primary btn-primary-fix show-match" team_home="${teamIdHome}" team_away="${teamIdAway}" fixture_id="${fixture_id}">
                                            <p class="fix-icon">
                                                <i class="bi bi-arrow-right"></i>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            `;
                        }
                    });
                });
            }

            $("#renderKQ").html(html);
        }

        function renderLTD(data){
            var now = dateNow();
            var html = "";
            var dataLTD = data;

            if (dataLTD != null) {
                dataLTD.forEach(function (ele, index) {
                    var title_date = dayOfWeek(ele.event_date) + ", " + convertDMY(ele.event_date);
                    html += `<h5 class="d-inline-block text-primary-fix text-uppercase border-bottom border-5">${title_date}</h5>`;
                    ele.data.forEach(function (value) {
                        const { fixture_id, elapsed, event_timestamp, home_team, away_team, round, round_int } = value;
                        var time = getTimeFromDate(event_timestamp);
                        var teamIdHome = home_team.team_id;
                        var teamIdAway = away_team.team_id;
                        var teamNameHome = home_team.team_name;
                        var teamNameAway = away_team.team_name;
                        var teamLogoHome = home_team.logo;
                        var teamLogoAway = away_team.logo;
                        var groupName = '';
                        if (typeof round != "undefined"){
                            switch (round) {
                                case "Round of 16":
                                    groupName = "Vòng 1/8";
                                    break;
                                case "Quarter-finals":
                                    groupName = "Tứ kết";
                                    break;
                                case "Semi-finals":
                                    groupName = "Bán kết";
                                    break;
                                case "Finals":
                                    groupName = "Chung kết";
                                    break;
                                default:
                                    groupName = (getGroupName(teamIdHome) != null) ? getGroupName(teamIdHome) : ""
                                    break;
                            }
                        }

                        if (typeof elapsed == "undefined"){
                            html += `
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column">
                                        <h4>${groupName}</h4>
                                        <div class="col">
                                            <div class="container_a">
                                                <div class="home">
                                                    <span class="name-home">${teamNameHome}</span> 
                                                    <img src="${teamLogoHome}" alt="${teamNameHome} " width="25" height="20" class="img-fluid" />
                                                </div>
                                                <strong style="margin-top:5px">${time}</strong>
                                                <div class="visit">
                                                    <img src="${teamLogoAway}" alt="${teamNameAway}" width="25" height="20" class="img-fluid" />
                                                    <span class="name-away">${teamNameAway}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="btn btn-lg btn-primary btn-primary-fix show-match" team_home="${teamIdHome}" team_away="${teamIdAway}" fixture_id="${fixture_id}">
                                            <p class="fix-icon">
                                                <i class="bi bi-arrow-right"></i>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            `;
                        }
                    });
                });
            }
            $("#renderLTD").html(html);
        }

        function renderBXH(data){

        }

        function renderDetailMatch(data){
            var fixture_detail = data.fixture_detail;
            var info = data.league_detail;
            var timeline = (typeof data.data != "undefined") ? loopElapsed(data.data) : 0;
            // match header
            var tournament = "AFF CUP 2022";
            var logoTournament = "img/logo-aff.svg";
            let { venue, home_team, away_team, status_short, score, goals_home_team, goals_away_team, event_timestamp, elapsed, event_date } = fixture_detail;

            var status_match = "Sắp diển ra";
            var colorStatus = `style="color:#000;background-color:#c7c9c8"`;
            if (status_short == "PEN" || status_short == "FT") {
                status_match = "Kết thúc";
                colorStatus = "";
            }else if (status_short == "LIVE"){
                status_match = "Đang diển ra";
                colorStatus = `style="color:#fff;background-color:#10a11a"`;
            }

            var time = getTimeFromDate(event_timestamp);
            var date = convertDMY(event_date.split("T")[0]);
            var teamIdHome = home_team.team_id;
            var teamIdAway = away_team.team_id;
            var teamNameHome = home_team.team_name;
            var teamNameAway = away_team.team_name;
            var teamLogoHome = home_team.logo;
            var teamLogoAway = away_team.logo;
            var FT = (typeof score.fulltime != "undefined") ? score.fulltime : time;
            var ftGoal = FT.split('-');
            var homeGoal = parseInt(ftGoal[0]);
            var awayGoal = parseInt(ftGoal[1]);
            var HT = (typeof score.penalty == "undefined") ? score.halftime : score.penalty;
            var titleHT = (typeof score.penalty != "undefined") 
                ? 
                    (typeof score.penalty == "undefined") 
                    ? 
                        "Hiệp một: "+HT
                    : 
                        "PEN: "+HT
                : ''
                ;
            var groupName = getGroupName(teamIdHome);
            var teamMatchHome = '';
            var teamMatchAway = '';
            var elapsed_time = (typeof elapsed != "undefined") ? `${elapsed}'`: '';
            if (timeline == 0) { $(".scoreboard__nav").css("display", 'none') } else { $(".scoreboard__nav").css("display", 'flex') };

            if (typeof score.length != "undefined") {
                getGoal(timeline, teamIdHome).forEach( function(element, index) {
                    teamMatchHome += `<div class="match-referee">${element}</div>`;
                });
                getGoal(timeline, teamIdAway).forEach( function(element, index) {
                    teamMatchAway += `<div class="match-referee">${element}</div>`;
                });
            }


            var scoreFull = `<span class="match-score-number">${FT}</span>`;
            var header = `
                <div class="match-header">
                    <div class="match-status" ${colorStatus}>${status_match}</div>
                    <div class="match-tournament"><img src="${logoTournament}" />${tournament}</div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">
                                <img src="${teamLogoHome}" />
                            </div>
                            <h2 class="team-name">${teamNameHome}</h2>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-date">${date} <strong>${time}</strong></div>
                            <div class="match-score">
                                ${scoreFull}
                            </div>
                            <div class="match-score-ht">
                                <span class="match-score-number-ht">${titleHT}</span>
                            </div>
                            <div class="match-time-lapsed">
                                ${elapsed_time}
                            </div>
                            <div class="match-referee">Sân: <strong>${(typeof venue != "undefined") ? venue: ""}</strong></div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team team--away">
                            <div class="team-logo">
                                <img src="${teamLogoAway}" />
                            </div>
                            <h2 class="team-name">${teamNameAway}</h2>
                        </div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="column-team-match">
                        <div class="team-match team-match-home">
                            ${teamMatchHome}
                        </div>
                    </div>
                    <div class="column-team-match"></div>
                    <div class="column-team-match">
                        <div class="team-match team-match-away">
                            ${teamMatchAway}
                        </div>
                    </div>
                </div>
            `;
            $(".match").html(header);
            //
            if (timeline != 0) {
                var timeLineMatch = `
                    <div class="max-width-520">
                        <div decode-data-ved="1" data-ved="2ahUKEwjjgf_z6Ob7AhW1UXwKHUzkBrkQpNICegQIARAA">
                            <div class="imso-ani tb_cbg" style="min-height: 134.391px;">
                                <div class="imso_gf__sgf imso_gf__bg-on" id="match-feed">
                                    <div>
                                        <div jscontroller="NO1nre" jsname="cPupKe">
                                            <div class="imso_gf__bg-on">
                                                <div class="imso_gf__fdiv-w">
                                                    <img class="imso_gf__fdiv-icn" src="img/stopwatch.png" alt="" />
                                                    <div class="imso_gf__fdiv"><span class="imso_gf__fdiv-hr"> </span><span class="imso_gf__fdiv-cnt">KẾT THÚC TRẬN ĐẤU</span><span class="imso_gf__fdiv-hr"> </span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                `;

                timeline.forEach( function(element) {
                    if (element.typeOf == "subst") {
                        element.data.forEach( function(value) {
                            const { elapsed, player, assist, team_name, team_id} = value;
                            var logoTeam = (team_id == teamIdHome) ? teamLogoHome : teamLogoAway;
                            timeLineMatch += `
                                <div>
                                    <div jscontroller="NO1nre" jsname="cPupKe">
                                        <div class="imso_gf__bg-on">
                                            <div class="imso_gf__gf-itm">
                                                <div>
                                                    <div>
                                                        <div class="imso_gf__in-card-hr">
                                                            <img class="imso_gf__fh-icn" src="img/substitution.png" alt="" />
                                                            <div class="imso_gf__nofold">
                                                                <div class="imso_gf__fh-ttl">THAY NGƯỜI</div>
                                                                <div class="imso_gf__fh-sub">${elapsed}'</div>
                                                            </div>
                                                        </div>
                                                        <div class="imso_gf__hdr-div"></div>
                                                    </div>
                                                    <div>
                                                        <div class="imso_gf__in-card-hr">
                                                            <div class="imso_gf__sub-cs1 imso_gf__in-card-yld">
                                                                <div class="imso_gf__sub-in">VÀO SÂN</div>
                                                                <div class="imso_gf__hr-mrg imso_gf__in-card-yld">
                                                                    <div
                                                                        class="imso_gf__pl-nm imso-hide-overflow imso-loa"
                                                                        jscontroller="HoZvlf"
                                                                        data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Ricardo+Horta&amp;stick=H4sIAAAAAAAAAONgVuLSz9U3KCsoTjI3eMRoyi3w8sc9YSmdSWtOXmNU4-IKzsgvd80rySypFJLgYoOy-KR4uJC08Sxi5Q3KTE4sSslX8MgvKkkEAE4XzvpWAAAA"
                                                                        role="link"
                                                                        tabindex="0"
                                                                        jsaction="x8IMsf"
                                                                    >
                                                                        ${player}
                                                                    </div>
                                                                    <div class="imso_gf__pl-desc">
                                                                        <div class="imso_gf__pl-tl imso_gf__hr-mrg">
                                                                            <span class="imso_gf__pl-tl-align">
                                                                                <img class="imso_btl__mh-logo" alt="" src="${logoTeam}" style="width: 16px; height: 16px;" />
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            class="imso_gf__pl-info imso-hide-overflow imso-loa"
                                                                            jscontroller="HoZvlf"
                                                                            data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Ricardo+Horta&amp;stick=H4sIAAAAAAAAAONgVuLSz9U3KCsoTjI3eMRoyi3w8sc9YSmdSWtOXmNU4-IKzsgvd80rySypFJLgYoOy-KR4uJC08Sxi5Q3KTE4sSslX8MgvKkkEAE4XzvpWAAAA"
                                                                            role="link"
                                                                            tabindex="0"
                                                                            jsaction="x8IMsf"
                                                                        >
                                                                            ${team_name}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="imso_gf__hr-mrg imso_gf__pl-hd imso-loa"
                                                                    jscontroller="HoZvlf"
                                                                    data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Ricardo+Horta&amp;stick=H4sIAAAAAAAAAONgVuLSz9U3KCsoTjI3eMRoyi3w8sc9YSmdSWtOXmNU4-IKzsgvd80rySypFJLgYoOy-KR4uJC08Sxi5Q3KTE4sSslX8MgvKkkEAE4XzvpWAAAA"
                                                                    role="link"
                                                                    tabindex="0"
                                                                    jsaction="x8IMsf"
                                                                >
                                                                    <div class="imso_gf__pl-hd-tcb" style="border-color: #670e30;">
                                                                        <g-img class="imso_gf__pl-hd-ph">
                                                                            <img
                                                                                id="dimg_oSqQY6OtIrWj8QPMyJvICw_15"
                                                                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHAAcAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAQIEBQcAA//EADcQAAEEAQMCAwUGBQUBAAAAAAEAAgMEEQUSIQYxE0FRIjJhcaEUI5GxwdEHQkOB8CRicpLhFf/EABkBAAMBAQEAAAAAAAAAAAAAAAADBAECBf/EACERAAMAAwABBAMAAAAAAAAAAAABAgMRITESEyIyBEFR/9oADAMBAAIRAxEAPwC5wuwnYSJxgmEmE7C5ADcLsKs1fqDTNIIbdsYkPZjGlx+nb+6CbnX16WzLHWYyOIuIY4Ny7Hl381y6SNSNHPZNJaBkkYWNSanq9x/tW7Ug3E7TIe6fHBqlhgDJJduQ0t3HH4Ln3Dr0mxJCEEaVq+swQRQPMb2j3Xy5JOPIn9UWadc+2Qsl2Fu4cg+R8/yWqkzGmiVhNIXoQmkLsw8yE0hepTSFgE1clwuwtMGpHna0uIOAM8J6hazbZQ0q1alcQ2OMng858sLAMp6x1WLU9We6OHY2P2QSBuPzwqVhDSH8Hnn5J9SrLftOLc5JLnEknGUUaZ0qy3hpeWjzPqpqtLyPiHXgr9NlY6F7NoJLcdvwKZLqTxG5ke4SNfvy31/zP0RvR6DijI++OPMd1dQ9GaYxo8SJz5Dy5x80p54Q1fj2zK36ha8J5ZkZaMcefwRV0j1Cx7zBdk2yvxsB+QH6fVFs3TFExljIQG4x8VnXV/T8+jubZhLgzd3aO3otx55p8DLgqZ2aaOQuKH+iNYOq6QGynNiudkmfP0KIcK1PZIMKaU8hNKAJy7CVItMEwg7+KFkxaFBXb/XnGfk0E/nhGSBv4nV3zHSg3s6R7MfE7f2K5rwavIP6HVEFVg/nk5cUd6DXDAOMkoLmsw6ZFH4pLj2AHmrrROs9MjlEcpcznglqgqaovi5jjNIrRlrckKXGA4YAyoWlarUv1i+JwI9U+3rNHRWNmuP9jdjgZSlHdDXfNlhJVjI93lUHUGlRXaktaVu5j2kfI+q87X8SNGc/w68csh9WgfupdXV6WtwCWpJkj34zw5h+IRkxueoyMirhkfRzZdK6u+yHJbYjcx2fLGSPyP4rSihKGp4fXDd4xLG6QkfAtOD9UWlelie5POtarQ0ppTymlMOCcuXLkAIUI9XT19Rp0paczJRXvN34/lyx/wD4ifUA40LIYcOMLwD6HBWdsZG1sbeNw93jySct64OxR6ukDUacb53WLLTKOGxsaOyfV0tty1LUi0yKJ0URk3c9gM5JIx9fRFOlValyHwp8gjzCkajThp0zHDLJsxgZcplf6KPa30rOgJXxatDFj7uUEOaD24Rb11ozLMTbMbS+KMbfCAyfmhro2rnXIGx9mZJP0WpmuyyTXnaCHZBBXD+wxLUmQ0KW3V46B0KCeJ7OJsODRwCdzwAAMZ9eQi3QNFgitN1GlXdVbsMckLh39OfNFlfp2lWmLogRny3HClXC2KDYMYHGAur3o5lLfDMpIHO69ml7NZWJ7dz7I/VXpBCt6cVR5lB8Jth7nODj7xGAOPoqOtC+vG6GR73lj3AOkcXOI3HGSe/Cbgyb1OhWfFpO9jymlOKaVWSE5ckJXIA4/EcLN78ElSzM12NkUu0Z7gZwPotHVPrmiwahHLKC9k/hnGwj2iBxnISssOlwbjv072DNGcxvyCpV+2ZWDJ9kKqrSNfG17TwQo16Zz37ZN3hA4G1uclR+WV+rhO0K1c/+hLZoWI42QN3Oc7seeef0WndOahNYu2IrFuGZ3D4nsBacEdiCfnygDpwXBWmjraVG6s5v3niDBcPgSQc/JEeZa8oE+lywGFoAnre2B/1Jz2+aGhky9GgSvLWY9FUajM4sIzhQtD1V9qF7JC4taMsc4EEj4ry1m22Oq57SC53sM+JJwFxVN8Mnh7R1xNRgk2lrg7eJOPdyf7+ir5nb5XuHYk4Xq+7O+FsTnMDGgD2G7eAoxVmHE46yTPlVpJCFIUpTSqCcmLly5ACJMpUhQBl+o/6DV7VJvssZI5zM+bTyPzwvWlZ3wvZjOX5zjlTeoazLWqW2u4e1+WO9OAhn7ZNStOjlAa4nI44UNLbeitPSTYWU9esac9sUQzuPIIyj/SdRlvUo5ZoyARwD2WT1bteb7yQ4JGO/fsiyh1L9lrN8Nw8M8bccdlzSeuDZyf1l/qlgC1MWEgOi9twPx7f56KsrTS6rYbPyKcBwD5SPH7d/wUDSo7nU1+RolfDTYR4srexOPdb8c55RVaiiriOtXjbHFE3DWNHARjn5pHOSvg2R00pyaV6BCIU0pSkKAJyRKkQByQpVT6j1Fp9Gc13PdNO3l0cI3bP+R7D5d/gsbS8mpN+Aa1J+7Vrbgf6rh+BwqzUaUVyPbI0bv5XDuCpJkM075SMb3lxHpk5Xq9mW5UO+7LNc0B8umXYX/dgvA4BHdFXTPS1zUJmyamSyDuWB3Lv2VxpOkttPa8vHB7ZR5Srtiia0YHHkirYTjR6UK0FKmyCtE2ONgw1jRjCrrpzZdn0CuH7Ws4wFU22ZsYzgubwlxai02MuXcNIjFNKrpNWbStOqaoGwSAAtkaSY3g+f+3+/4qwBDgC0gg9iPNejNKltEV4rx/ZCFIUpTStFn//Z"
                                                                                class="YQ4gaf zr758c"
                                                                                height="48"
                                                                                width="48"
                                                                                alt=""
                                                                            />
                                                                        </g-img>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="imso_gf__in-card-hr">
                                                            <div class="imso_gf__sub-cs2 imso_gf__in-card-yld">
                                                                <div class="imso_gf__sub-out">RA SÂN</div>
                                                                <div class="imso_gf__hr-mrg imso_gf__in-card-yld">
                                                                    <div
                                                                        class="imso_gf__pl-nm imso-hide-overflow imso-loa"
                                                                        jscontroller="HoZvlf"
                                                                        data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Gon%C3%A7alo+Ramos&amp;stick=H4sIAAAAAAAAAONgVuLVT9c3NMwwNqq0zCi0fMRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18ixi5XPPzzu8PDEnXyEoMTe_GADRor5TXQAAAA"
                                                                        role="link"
                                                                        tabindex="0"
                                                                        jsaction="x8IMsf"
                                                                    >
                                                                        ${assist}
                                                                    </div>
                                                                    <div class="imso_gf__pl-desc">
                                                                        <div class="imso_gf__pl-tl imso_gf__hr-mrg">
                                                                            <span class="imso_gf__pl-tl-align">
                                                                                <img class="imso_btl__mh-logo" alt="" src="${logoTeam}" style="width: 16px; height: 16px;" />
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            class="imso_gf__pl-info imso-hide-overflow imso-loa"
                                                                            jscontroller="HoZvlf"
                                                                            data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Gon%C3%A7alo+Ramos&amp;stick=H4sIAAAAAAAAAONgVuLVT9c3NMwwNqq0zCi0fMRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18ixi5XPPzzu8PDEnXyEoMTe_GADRor5TXQAAAA"
                                                                            role="link"
                                                                            tabindex="0"
                                                                            jsaction="x8IMsf"
                                                                        >
                                                                            ${team_name}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="imso_gf__hr-mrg imso_gf__pl-hd imso-loa"
                                                                    jscontroller="HoZvlf"
                                                                    data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Gon%C3%A7alo+Ramos&amp;stick=H4sIAAAAAAAAAONgVuLVT9c3NMwwNqq0zCi0fMRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18ixi5XPPzzu8PDEnXyEoMTe_GADRor5TXQAAAA"
                                                                    role="link"
                                                                    tabindex="0"
                                                                    jsaction="x8IMsf"
                                                                >
                                                                    <div class="imso_gf__pl-hd-tcb" style="border-color: #670e30;">
                                                                        <g-img class="imso_gf__pl-hd-ph">
                                                                            <img
                                                                                id="dimg_oSqQY6OtIrWj8QPMyJvICw_17"
                                                                                src="data:image/jpeg;base64,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"
                                                                                class="YQ4gaf zr758c"
                                                                                height="48"
                                                                                width="48"
                                                                                alt=""
                                                                            />
                                                                        </g-img>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        });
                    }else if (element.typeOf == "goal") {
                        element.data.forEach( function(value) {
                            const { elapsed, elapsed_plus, player, assist, team_name, team_id} = value;
                            var logoTeam = (team_id == teamIdHome) ? teamLogoHome : teamLogoAway;
                            var colorGoal = (team_id == teamIdHome) ? "#670e30;" : "#e10100;";
                            var time = (typeof elapsed_plus != "undefined") ? elapsed+"+"+elapsed_plus+"'": elapsed+"'";
                            var assistPlayer = (typeof assist != "undefined") ? `Kiến tạo: ${assist}` : '';
                            timeLineMatch += `
                                <div>
                                    <div jscontroller="NO1nre" jsname="cPupKe">
                                        <div class="imso_gf__bg-on">
                                            <div class="imso_gf__gf-itm">
                                                <div>
                                                    <div class="imso_gf__gh" style="background-color: ${colorGoal}">
                                                        <div>
                                                            <img class="oeEknf" src="img/goal.png" />
                                                            <div class="dgDgVc">VÀOOOOO!!!</div>
                                                            <div class="MmmFqe">${time}</div>
                                                        </div>
                                                        <div class="imso_gf__gh-scr">
                                                            <div class="imso_gf__scr">
                                                                <div class="imso_gf__scr-t1 imso_gf__emph">${teamNameHome}</div>
                                                                <div class="imso_gf__scr-val imso_gf__emph">${homeGoal}</div>
                                                                <div class="imso_gf__nemph">-</div>
                                                                <div class="imso_gf__scr-val imso_gf__nemph">${awayGoal}</div>
                                                                <div class="imso_gf__scr-t2 imso_gf__nemph">${teamNameAway}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="imso_gf__in-card-hr">
                                                        <div class="imso_gf__in-card-sc imso_gf__in-card-yld">
                                                            <div class="imso_gf__hr-mrg imso_gf__in-card-yld">
                                                                <div
                                                                    class="imso_gf__pl-nm imso-hide-overflow imso-loa"
                                                                    jscontroller="HoZvlf"
                                                                    data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Rafael+Le%C3%A3o&amp;stick=H4sIAAAAAAAAAONgVuLVT9c3NEy3SCozLbA0fcRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18ixi5QlKTEtMzVHwST28OB8AOhJx81sAAAA"
                                                                    role="link"
                                                                    tabindex="0"
                                                                    jsaction="x8IMsf"
                                                                >
                                                                    ${player}
                                                                </div>
                                                                <div class="imso_gf__pl-desc">
                                                                    <div class="imso_gf__pl-tl imso_gf__hr-mrg">
                                                                        <span class="imso_gf__pl-tl-align">
                                                                            <img class="imso_btl__mh-logo" alt="" src="${logoTeam}" style="width: 16px; height: 16px;" />
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        class="imso_gf__pl-info imso-hide-overflow imso-loa"
                                                                        jscontroller="HoZvlf"
                                                                        data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Rafael+Le%C3%A3o&amp;stick=H4sIAAAAAAAAAONgVuLVT9c3NEy3SCozLbA0fcRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18ixi5QlKTEtMzVHwST28OB8AOhJx81sAAAA"
                                                                        role="link"
                                                                        tabindex="0"
                                                                        jsaction="x8IMsf"
                                                                    >
                                                                        ${team_name}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="imso_gf__lbl-na">${assistPlayer}</div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="imso_gf__hr-mrg imso_gf__pl-hd imso-loa"
                                                                jscontroller="HoZvlf"
                                                                data-url="/search?rlz=1C1CHZN_viVN986VN986&amp;cs=1&amp;q=Rafael+Le%C3%A3o&amp;stick=H4sIAAAAAAAAAONgVuLVT9c3NEy3SCozLbA0fcRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18ixi5QlKTEtMzVHwST28OB8AOhJx81sAAAA"
                                                                role="link"
                                                                tabindex="0"
                                                                jsaction="x8IMsf"
                                                            >
                                                                <div class="imso_gf__pl-hd-tcb" style="border-color: ${colorGoal}">
                                                                    <g-img class="imso_gf__pl-hd-ph">
                                                                        <img
                                                                            id="dimg_oSqQY6OtIrWj8QPMyJvICw_1"
                                                                            src="data:image/jpeg;base64,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"
                                                                            class="YQ4gaf zr758c"
                                                                            height="48"
                                                                            width="48" 
                                                                            alt=""
                                                                        />
                                                                    </g-img>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            if (team_id == teamIdHome) {
                                homeGoal--;
                            }else{
                                awayGoal--;
                            }
                         });
                    }
                });

                timeLineMatch += `
                                    <div>
                                        <div jscontroller="NO1nre" jsname="cPupKe">
                                            <div class="imso_gf__bg-on">
                                                <div class="imso_gf__fdiv-w">
                                                    <img class="imso_gf__fdiv-icn" src="img/stopwatch.png" alt="" />
                                                    <div class="imso_gf__fdiv"><span class="imso_gf__fdiv-hr"> </span><span class="imso_gf__fdiv-cnt">BẮT ĐẦU</span><span class="imso_gf__fdiv-hr"> </span></div>
                                                    <div class="imso_gf__fdiv-sub imso_gf__fdiv-sub-txt">${time}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $(".timeline-match").html(timeLineMatch);
            }
        }

        function renderStats(data) {
            const { total_shots, shots_on_goal, ball_possession, total_passes, passes, fouls, yellow_cards, red_cards, offsides, corner_kicks} = data;
            var logoHome = $(".team.team--home .team-logo img").attr("src");
            var nameHome = $(".team.team--home .team-name").text();
            var logoAway = $(".team.team--away .team-logo img").attr("src");
            var nameAway = $(".team.team--away .team-name").text();

            var htmlStatis = `
                <div class="max-width-520">
                    <div class="lr-imso-ss-wdm">
                        <table class="lr-imso-ss-wdt">
                            <tbody>
                                <tr class="zvQp2c">
                                    <th class="jqZdce" role="columnheader" scope="col">
                                        <div class="UNCnvc"><img class="imso_btl__mh-logo" alt="${nameHome}" height="24px" id="spotl_maORY_SEAbOomgfnv4PoCQ_9" src="${logoHome}" width="24px"></div>
                                    </th>
                                    <th class="gZIgRd imso-medium-font" role="columnheader" scope="col">TEAM STATS</th>
                                    <th class="jqZdce" role="columnheader" scope="col">
                                        <div class="UNCnvc">
                                            <img class="imso_btl__mh-logo" alt="${nameAway}" height="24px" id="spotl_maORY_SEAbOomgfnv4PoCQ_11" src="${logoAway}" width="24px">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${total_shots.home}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Số lần sút</th>
                                    <td>${total_shots.away}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${shots_on_goal.home}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Sút trúng đích</th>
                                    <td>${shots_on_goal.away}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${ball_possession.home}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Kiểm soát bóng</th>
                                    <td>${ball_possession.away}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${total_passes.home}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Lượt chuyền bóng</th>
                                    <td>${total_passes.away}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${passes.home}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Tỷ lệ chuyền bóng chính xác</th>
                                    <td>${passes.away}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${fouls.home}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Phạm lỗi</th>
                                    <td>${fouls.away}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${(typeof yellow_cards.home != "undefined") ? yellow_cards.home : 0}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Thẻ vàng</th>
                                    <td>${(typeof yellow_cards.away != "undefined") ? yellow_cards.away : 0}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${(typeof red_cards.home != "undefined") ? red_cards.home : 0}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Thẻ đỏ</th>
                                    <td>${(typeof red_cards.away != "undefined") ? red_cards.away : 0}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${(typeof offsides.home != "undefined") ? offsides.home : 0}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Việt vị</th>
                                    <td>${(typeof offsides.home != "undefined") ? offsides.home : 0}</td>
                                </tr>
                                <tr class="MzWkAb">
                                    <td>${(typeof corner_kicks.home != "undefined") ? corner_kicks.home : 0}</td>
                                    <th class="JmSkkf" role="rowheader" scope="row">Phạt góc</th>
                                    <td>${(typeof corner_kicks.home != "undefined") ? corner_kicks.home : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;

            $(".statistic").html(htmlStatis);
        }

        function dateNow(){
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = yyyy + '-' + mm + '-' + dd;
            return formattedToday;
        }

        function dayOfWeek(dateString){
            var days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
            var d = new Date(dateString);
            var dayName = days[d.getDay()];
            return dayName;
        }

        function convertDMY(dateString) {
            let arr = dateString.split("-");
            let d = arr[2];
            let m = arr[1];
            let y = arr[0];
            return d + "/" + m + "/" + y;
        }

        function getTimeFromDate(timestamp) {
            var date = new Date(timestamp * 1000);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if (hours.toString().length < 2) hours = '0' + hours;
            if (minutes.toString().length < 2) minutes = '0' + minutes;
            var hm = [hours, minutes].join('h');
            return hm;
        }

        function getGroupName(id) {
            var group = null;
            const listGroup = JSON.parse(localStorage.getItem('standing'));
            var index = (listGroup.map(function(x){ return parseInt(x.team_id); })).indexOf(id);
            if (index != -1 )  {
                group = listGroup[index].group.replace("", "Bảng ");
            };
            return group;
        }

        function getGoal(data, team_id){
            var array_result = [];
            data.forEach(function (element) {
                if (element.team_id == team_id && element.type == "Goal") {
                    var p = (typeof element.detail != "undefined" && element.detail == "Penalty") ? "(Pen)" : "";
                    var temp = element.player + ` (${element.elapsed}') `+ p;
                    array_result.push(temp);
                }
            })
            return array_result;
        }

        function loopFormation(data, team_home_id, team_away_id) {
            var lineups = (typeof data.lineups != "undefined" ) ? data.lineups : 0;
            var players = (typeof data.players != "undefined" ) ? data.players : 0;
            var rs = [];
            if (lineups != 0) {
                var fmHome = lineups[0];
                var fmAway = lineups[1];

                var formationHome = "1-"+fmHome.formation;
                var formationAway = "1-"+fmAway.formation;
                var mainPlayerHome = [];
                var subPlayerHome = [];
                var mainPlayerAway = [];
                var subPlayerAway = [];
                var newFMHome = [];

                players.forEach(function (v) {
                    if (team_home_id == v.team_id && v.substitute == "False") {
                        mainPlayerHome.push(v);
                    }else if (team_home_id == v.team_id && v.substitute == "True") {
                        subPlayerHome.push(v);
                    }else if (team_away_id == v.team_id && v.substitute == "False") {
                        mainPlayerAway.push(v);
                    }else if (team_away_id == v.team_id && v.substitute == "True") {
                        subPlayerAway.push(v);
                    }
                })

                var arrFMHome = loopData(mainPlayerHome, "formation");
                var arrFormationHome = formationHome.split("-");

                for (var i = 0; i < arrFormationHome.length; i++) {
                    if (arrFMHome[i].data.length == arrFormationHome[i]) {
                    }else if (arrFMHome[i].data.length != arrFormationHome[i]) {
                        var mang1 = {
                            position: arrFMHome[i].position,
                            data: arrFMHome[i].data.slice(0,arrFormationHome[i])
                        }
                        var mang2 = {
                            position: arrFMHome[i].position,
                            data: arrFMHome[i].data.slice(arrFormationHome[i], arrFMHome[i].data.length)
                        }
                        arrFMHome.insert(i, mang1);
                        arrFMHome[i+1] = mang2;
                        break;
                    }
                }
                
                var arrFMAway = loopData(mainPlayerAway, "formation");
                var arrFormationAway = formationAway.split("-");

                for (var i = 0; i < arrFormationAway.length; i++) {
                    if (arrFMAway[i].data.length == arrFormationAway[i]) {
                    }else if (arrFMAway[i].data.length != arrFormationAway[i]) {
                        var mang1 = {
                            position: arrFMAway[i].position,
                            data: arrFMAway[i].data.slice(0,arrFormationAway[i])
                        }
                        var mang2 = {
                            position: arrFMAway[i].position,
                            data: arrFMAway[i].data.slice(arrFormationAway[i], arrFMAway[i].data.length)
                        }
                        arrFMAway.insert(i, mang1);
                        arrFMAway[i+1] = mang2;
                        break;
                    }
                }

                var home = {
                    team_id: team_home_id,
                    formation: fmHome.formation,
                    arrFMHome: arrFMHome,
                    substitutes: fmHome.substitutes.reverse(),
                    coach: fmHome.coach
                };
                var away = {
                    team_id: team_away_id,
                    formation: fmAway.formation,
                    arrFMAway: arrFMAway,
                    substitutes: fmAway.substitutes.reverse(),
                    coach: fmAway.coach
                }
                rs.home = home;
                rs.away = away;
            }
            return rs;
        }

        function renderFormation(data) {
            var formationHome = data.home;
            var formationAway = data.away;
            var formation__home = ``;
            var formation__away = ``;
            var reverseFMAway = formationAway.arrFMAway.reverse();
            var lengthSub = (formationHome.substitutes.length >= formationAway.substitutes.length) ? formationHome.substitutes.length: formationAway.substitutes.length;
            var logoHome = $(".team.team--home .team-logo img").attr("src");
            var nameHome = $(".team.team--home .team-name").text();
            var logoAway = $(".team.team--away .team-logo img").attr("src");
            var nameAway = $(".team.team--away .team-name").text();

            var show__formation = `
                <div class="max-width-520" style="background:#29502c; color: white;">
                    <div class="lr-vl-hf lrvl-btrc lrvl-btrc-home" aria-level="2" role="heading" tabindex="0">
                        <span class="lrvl-tvc lrvl-nal" style="float: left;">
                            <img class="lrvl-nal lrvl-l" src="${logoHome}" alt="${nameHome}" style="width: 25px; height: 25px;">
                            ${nameHome}
                        </span>
                        <span class="lrvl-tvc lrvl-f" style="float: right;">${formationHome.formation}</span>
                    </div>
                    <div class="field__container">
                        <div class="field__half">
                            <div class="penalty-box">
                                <div class="penalty-box__container">
                                    <div class="penalty-box__infield"></div>
                                    <div class="penalty-box__circle"></div>
                                </div>
                            </div>
                            <div class="field__corner field__corner--right"></div>
                            <div class="field__corner field__corner--left"></div>
                            <div class="formation formation--home" id="formation--home">
                                <div class="formation formation--home">`;
                                    formationHome.arrFMHome.forEach(function (value){
                                        show__formation += `<div class="formation__line">`;
                                        value.data.forEach(function (v){
                                            show__formation += `
                                                <div class="player">
                                                    <div class="player__number">${v.number}</div>
                                                    <span class="player__name">${v.player_name}</span>
                                                </div>
                                            `;
                                        });
                                        show__formation += `</div>`;
                                    });
            show__formation += `
                                </div>
                            </div>
                        </div>
                        <div class="field__center-line"></div>
                        <div class="field__half field__half--reverse">
                            <div class="formation formation--away" id="formation--away">`
                                reverseFMAway.forEach(function (value, index){
                                    var classMTAway = "";
                                    switch (index) {
                                        case 0:
                                            classMTAway = "mt-2";
                                            break;
                                        case reverseFMAway.length:
                                            classMTAway = "mt-0";
                                            break;
                                    }
                                    show__formation += `<div class="formation__line ${classMTAway}">`;
                                    value.data.forEach(function (v){
                                        show__formation += `
                                            <div class="player">
                                                <div class="player__number">${v.number}</div>
                                                <span class="player__name">${v.player_name}</span>
                                            </div>
                                        `;
                                    });
                                    show__formation += `</div>`;
                                });
            show__formation += `
                            </div>
                            <div class="penalty-box">
                                <div class="penalty-box__container">
                                    <div class="penalty-box__infield"></div>
                                    <div class="penalty-box__circle"></div>
                                </div>
                            </div>
                            <div class="field__corner field__corner--right"></div>
                            <div class="field__corner field__corner--left"></div>
                        </div>
                    </div>
                    <div class="lr-vl-hf lrvl-btrc lrvl-btrc-away" aria-level="2" role="heading" tabindex="0">
                        <span class="lrvl-tvc lrvl-nal" style="float: left;">
                            <img class="lrvl-nal lrvl-l" src="${logoAway}" alt="${nameAway}" style="width: 25px; height: 25px;">
                            ${nameAway}
                        </span>
                        <span class="lrvl-tvc lrvl-f" style="float: right;">${formationAway.formation}</span>
                    </div>
                </div>
            `;
            $(".show-formation").html(show__formation);

            var show__substitute = `
                <div class="max-width-520">
                    <div class="lr-imso-ss-wdm">
                        <table class="lr-imso-ss-wdt">
                            <tbody>
                                <tr class="zvQp2c">
                                    <th class="jqZdce custom-col custom-col-home" role="columnheader" scope="col" >
                                        <div class="span-away">
                                            <img class="imso_btl__mh-logo" alt="${nameHome}" height="24px" src="${logoHome}" width="24px">
                                        </div>
                                    </th>
                                    <th class="gZIgRd imso-medium-font" role="columnheader" scope="col"></th>
                                    <th class="jqZdce custom-col custom-col-away" role="columnheader" scope="col">
                                        <div class="span-home">
                                            <img class="imso_btl__mh-logo" alt="${nameAway}" height="24px" src="${logoAway}" width="24px">
                                        </div>
                                    </th>
                                </tr>`;
                                for (var i = 0; i < lengthSub; i++) {
                                    var subHome = (typeof formationHome.substitutes[i] != "undefined")
                                        ?
                                            formationHome.substitutes[i].number + " " + formationHome.substitutes[i].player
                                        :
                                            ""
                                        ;

                                    var subAway = (typeof formationAway.substitutes[i] != "undefined")
                                        ?
                                            formationAway.substitutes[i].player  + " " +  formationAway.substitutes[i].number
                                        :
                                            ""
                                        ;

                                    show__substitute += `
                                        <tr class="MzWkAb">
                                            <td class="span-away">${subHome}</td>
                                            <th class="JmSkkf" role="rowheader" scope="row"></th>
                                            <td class="span-home">${subAway}</td>
                                        </tr>
                                    `;
                                }
            show__substitute += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            $(".show-substitute").html(show__substitute);      

        }

        function removeActive(){
            $(".scoreboard__nav-el").each(function( index ) {
              $(this).removeClass("is-active");
            });
        }

        function setActive(){
            $(".scoreboard__nav-el").each(function( index ) {
                if (index == 0) {
                    $(this).addClass("is-active");
                    $(".timeline-match").css("display","block");
                    $(".statistic").css("display","none");
                    $(".formation-match").css("display","none");

                    $(".timeline-match").empty();
                    $(".match").empty();
                    $(".statistic").empty();
                    // $(".formation-match").empty();
                }
            });
        }

        function openpopup(id) {
            event.preventDefault();
            $("#"+id+"").addClass('is-visible');
            $("body").css("overflow-y", "hidden");
            
        }

        Array.prototype.insert = function ( index, ...items ) {
            this.splice( index, 0, ...items );
        };
    });
})(jQuery);