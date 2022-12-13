Handlebars.registerHelper("inc", function (e, a) {
    return parseInt(e) + 1;
}),
Handlebars.registerHelper("pheptoan", function (e, a, t, i) {
    var n = 0;
    switch (((e = e > 0 ? parseInt(e) : 0), (a = a > 0 ? parseInt(a) : 0), t)) {
        case "-":
            n = parseInt(e) - parseInt(a);
            break;
        case "+":
            n = parseInt(e) + parseInt(a);
            break;
        case "*":
            n = parseInt(e) * parseInt(a);
            break;
        case "/":
            n = parseInt(e) / parseInt(a);
    }
    return parseInt(n);
}),
Handlebars.registerHelper("creatUrlMatch", function (e, a, t, i) {
    return Common.creatUrlMatch(e, a, t);
}),
Handlebars.registerHelper("showVitriPlayers", function (e, a) {
    return "G" == e || "Goalkeeper" == e ? "Thủ môn" : "D" == e || "Defender" == e ? "Hậu vệ" : "M" == e || "Midfielder" == e ? "Tiền vệ" : "F" == e || "Attacker" == e ? "Tiền đạo" : "";
}),
Handlebars.registerHelper("ifCond", function (e, a, t, i) {
    switch (a) {
        case "==":
            return e == t ? i.fn(this) : i.inverse(this);
        case "===":
            return e === t ? i.fn(this) : i.inverse(this);
        case "!=":
            return e != t ? i.fn(this) : i.inverse(this);
        case "!==":
            return e !== t ? i.fn(this) : i.inverse(this);
        case "<":
            return e < t ? i.fn(this) : i.inverse(this);
        case "<=":
            return e <= t ? i.fn(this) : i.inverse(this);
        case ">":
            return e > t ? i.fn(this) : i.inverse(this);
        case ">=":
            return e >= t ? i.fn(this) : i.inverse(this);
        case "&&":
            return e && t ? i.fn(this) : i.inverse(this);
        case "||":
            return e || t ? i.fn(this) : i.inverse(this);
        default:
            return i.inverse(this);
    }
}),
Handlebars.registerHelper("createUrlTeam", function (e, a, t, i) {
    return Common.createUrlTeam(e, a, t);
}),
Handlebars.registerHelper("createUrlPlayer", function (e, a, t) {
    if (void 0 !== a && "" != a) {
        var i = Common.nonAccentVietnamese(a);
        return (
            "/the-thao/du-lieu-bong-da/cau-thu/" +
            (i = i
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")) +
            "-" +
            e
        );
    }
    return "";
}),
Handlebars.registerHelper("truncate_word", function (e, a, t) {
    a = a || 10;
    var i = (e += "").split(" ");
    for (var n in i) i[n].length > a && (i[n] = $.trim(i[n]).substring(0, a) + "...");
    return i.join(" ");
}),
Handlebars.registerHelper("showTangXuongHang", function (e, a) {
    var t = "",
        i = Common.settings.leagues_list[e],
        n = 1;
    for (var l in i.note_standing) {
        var o = "";
        n > 1 && (o = "mt10"), n++, (t += '<div class="it-note ' + l + " flexbox " + o + '"><span class="ico"></span><span class="note-txt">' + i.note_standing[l] + "</span> </div>");
    }
    return t;
}),
Handlebars.registerHelper("getYearBorn", function (e, a) {
    return "" != e ? e.split("/")[2] : "";
}),
Handlebars.registerHelper("boldPlayerName", function (e, a) {
    if (e) {
        var t = e.split(" "),
            i = t[0];
        return delete t[0], i + "&nbsp; <strong> " + t.join(" ") + "</strong>";
    }
    return e;
}),
Handlebars.registerHelper("transferTeams", function (e, a, t, i) {
    if (e) {
        var n = css_url_vne + "/dulieubongda/images/graphics/",
            l = "",
            o = "",
            d = "";
        return (
            e == a.team_id
                ? ((o = '<span class="from">Từ</span>'), (l = ""), null != typeof t.logo && null != t.logo && "" != t.logo && (l = '<img src="' + t.logo + '" alt="">'), (d = void 0 !== t.team_name ? t.team_name : "-"))
                : e == t.team_id && ((o = '<span class="to">Đến</span>'), (l = ""), null != typeof a.logo && null != a.logo && "" != a.logo && (l = '<img src="' + a.logo + '" alt="">'), (d = void 0 !== a.team_name ? a.team_name : "-")),
            "" == l && (l = '<img src="' + n + 'team_logo_placeholder.png" alt="">'),
            `<td class="from-to-left">${o}</td>\n        <td class="from-to-center"><span class="ico-cn">${l}</span></td>\n        <td class="from-to-right"><span class="text-name">${d}</span></td>`
        );
    }
    return "";
}),
Handlebars.registerHelper("formatTime", function (e, a) {
    var t = Common.convertUTCDateToLocalDate(new Date(e));
    return t.getDate() + "/" + parseInt(t.getMonth() + 1) + "/" + t.getFullYear();
}),
Handlebars.registerHelper("numberWithCommas", function (e, a) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}),
Handlebars.registerHelper("getAge", function (e, a) {
    if (e) {
        var t = Common.convertUTCDateToLocalDate(new Date()),
            i = e.split("/");
        return t.getFullYear() - i[2];
    }
    return "";
});
var navbar = document.getElementById("main-nav");
if (navbar) {
window.onscroll = function () {
    myFunction();
};
var sticky = navbar.offsetTop;
function myFunction() {
    window.pageYOffset > sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
}
for (var l_id in DATA_FOOTBALL)
if ("v_league" == DATA_FOOTBALL[l_id].code) var ID_VLEAGUE = parseInt(l_id);
else if ("uefa_champions_league" == DATA_FOOTBALL[l_id].code) var ID_CHAMPION_LEAGUE = parseInt(l_id);
else if ("ngoai_hang_anh" == DATA_FOOTBALL[l_id].code) var ID_PREMIER_LEAGUE = parseInt(l_id);
else if ("league1" == DATA_FOOTBALL[l_id].code) var ID_LEGUE1 = parseInt(l_id);
else if ("bundes_liga" == DATA_FOOTBALL[l_id].code) var ID_BUNDESLIGA = parseInt(l_id);
else if ("la_liga" == DATA_FOOTBALL[l_id].code) var ID_LALIGA = parseInt(l_id);
else if ("seri_a" == DATA_FOOTBALL[l_id].code) var ID_SERIA = parseInt(l_id);
else if ("uefa_europa_league" == DATA_FOOTBALL[l_id].code) var ID_EUROPA_LEAGUE = parseInt(l_id);
var leagues_id_map = {
    2790: ID_PREMIER_LEAGUE,
    2833: ID_LALIGA,
    2755: ID_BUNDESLIGA,
    2664: ID_LEGUE1,
    2857: ID_SERIA,
    2771: ID_CHAMPION_LEAGUE,
    2777: ID_EUROPA_LEAGUE,
    3084: ID_VLEAGUE,
    4335: ID_PREMIER_LEAGUE,
    4378: ID_LALIGA,
    4346: ID_BUNDESLIGA,
    4347: ID_LEGUE1,
    4399: ID_SERIA,
},
dataFootball = {
    setings: function () {},
    dataEffect: { standings: [], league_lichdau: [], league_ketqua: [], league_bangdiem: [], league_date: [], fixture_detail: [] },
    init: function () {
        var e = this;
        $("#_apphome").length > 0
            ? (e.home(),
              setInterval(function () {
                  e.home();
              }, 9e5))
            : $("#detail-leagues").length > 0
            ? (e.detail(),
              setInterval(function () {
                  e.detail();
              }, 9e5))
            : $("#detail-fixtures").length > 0
            ? (e.fixtures(),
              setInterval(function () {
                  e.fixtures();
              }, 9e5))
            : $("#wrapper-doi-bong").length > 0
            ? $("#wrapper-doi-bong").data("teamid") <= 0
                ? e.pageTeams()
                : $("#wrapper-doi-bong").data("teamid") > 0 && e.pageTeamsDetail()
            : $("#wrapper-players").length > 0 && e.pagePlayerDetail(),
            setTimeout(function () {
                Common.myvneLogin();
            }, 2e3);
    },
    pagePlayerDetail: function () {
        var e = this;
        $("#k_search_player").typing({
            stop: function (e, a) {
                "" != a.val()
                    ? Common.player_search(a.val(), function (e) {
                          if (($("#result-search-player").html(""), $("#result-search-player").closest(".list-team").hide(), e.code && void 0 !== e.data)) {
                              var a = "";
                              for (var t in e.data) {
                                  var i = Common.nonAccentVietnamese(e.data[t].player_name.toLowerCase()) + "-" + e.data[t].player_id;
                                  i = i.replace(/. /g, "-").replace(/'/g, "-");
                                  var n = void 0 !== e.data[t].country ? JSON.parse(e.data[t].country) : {};
                                  if (void 0 !== n.logo && "" != n.logo) var l = n.logo;
                                  else l = css_url_vne + "/dulieubongda/images/graphics/team_logo_placeholder.png";
                                  a += `<a href="/the-thao/du-lieu-bong-da/cau-thu/${i}" class="item-team flexbox" title="${e.data[t].player_name}">\n                                                    <img src="${l}" alt="${n.name}">\n                                                    <span class="name-team teamname-suggest">${e.data[t].player_name}</span>\n                                                </a>`;
                              }
                              $("#result-search-player").html(a), $("#result-search-player").closest(".list-team").show();
                          }
                      })
                    : ($("#result-search-player").html(""), $("#result-search-player").closest(".list-team").hide());
            },
            delay: 400,
        }),
            $("body").addClass("page-lichdau");
        var a = function () {
            var e = [];
            $(".logoclub-load").each(function (a, t) {
                e[$(t).data("teamid")] = $(t).data("teamid");
            }),
                (e = e.filter(function () {
                    return !0;
                })),
                Common.teamDetail(e, function (e) {
                    for (var a in e.data)
                        void 0 !== e.data[a] &&
                            null != e.data[a] &&
                            e.data[a] &&
                            e.data[a].logo &&
                            "" != e.data[a].logo &&
                            $('span[data-teamid="' + e.data[a].team_id + '"]').replaceWith('<img src="' + e.data[a].logo + '" class="logo-club" />');
                });
        };
        if ($("#wrapper-players").data("playerid") <= 0)
            Common.list_player_init(Common.settings.players_id_init, function (e) {
                var t = Handlebars.compile($("#template-item-players").html());
                if (e.code) {
                    var i = [];
                    for (var n in Common.settings.players_id_init) {
                        var l = e.data[Common.settings.players_id_init[n]];
                        void 0 !== l.seo_meta && void 0 !== l.seo_meta.thumbnail && "" != l.seo_meta.thumbnail && (l.player_logo = l.seo_meta.thumbnail.replace(".jpg", "_m_100x100.jpg")), i.push(l);
                    }
                    $("#box-content").replaceWith(t({ data: i })), a();
                } else $("#box-content").replaceWith('<div class="wrap-block-giaidau p24"><p style="text-align: center;">Dữ liệu cầu thủ chưa cập nhật</p></div>');
            });
        else if ($("#wrapper-players").data("playerid") > 0) {
            var t = parseInt($("#wrapper-players").data("playerid")),
                i = {
                    shots: { total: 0, on: 0, percent: "0%" },
                    goals: { total: 0, conceded: 0, assists: 0, saves: 0 },
                    passes: { total: 0, key: 0, accuracy: 0 },
                    tackles: { total: 0, blocks: 0, interceptions: 0 },
                    duels: { total: 0, won: 0 },
                    dribbles: { attempts: 0, success: 0 },
                    fouls: { drawn: 0, committed: 0 },
                    cards: { yellow: 0, yellowred: 0, red: 0 },
                    penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 },
                    games: { appearences: 0, minutes_played: 0, lineups: 0, minutes_played_avg: 0 },
                    substitutes: { in: 0, out: 0, bench: 0 },
                    list_league: !1,
                    list_season: !1,
                };
            Common.list_player_init([t], function (n) {
                if (n.code) {
                    var l = n.data[t];
                    if (
                        ((l = $.extend(!0, i, l)).games.appearences > 0 && l.games.minutes_played > 0 && (l.games.minutes_played_avg = Math.ceil(l.games.minutes_played / l.games.appearences)),
                        l.shots.total > 0 && l.shots.on > 0 && ((l.shots.percent = Math.round((l.shots.on / l.shots.total) * 1e4) / 100 + "%"), (l.shots.percent = l.shots.percent.replace(".", ","))),
                        l.list_league)
                    ) {
                        var o = JSON.parse(l.list_league);
                        for (var d in ((l.list_league = []), Common.settings.sort_league_filter_player)) {
                            var s = Common.settings.sort_league_filter_player[d],
                                r = Common.settings.leagues_list[s].code;
                            for (var u in o) r == o[u] && (l.list_league.push({ name: Common.settings.leagues_list[s].name, code: Common.settings.leagues_list[s].code, index: d }), delete o[u]);
                            if (Object.size(o) <= 0) break;
                        }
                        l.list_league.sort(function (e, a) {
                            return e.index < a.index ? -1 : e.index > a.index ? 1 : 0;
                        });
                    }
                    if (l.list_season) {
                        var m = JSON.parse(l.list_season);
                        for (var d in ((l.list_season = []), m)) {
                            var _ = m[d].toString().split("-");
                            null != typeof _[0] && _[0] > 1900 && null != typeof _[1] && _[1] > 1900 && l.list_season.push(m[d]);
                        }
                        (l.list_season = l.list_season.slice(0, 10)), void 0 !== l.seo_meta && void 0 !== l.seo_meta.thumbnail && "" != l.seo_meta.thumbnail && (l.player_logo = l.seo_meta.thumbnail.replace(".jpg", "_m_100x100.jpg"));
                    }
                    var c = Handlebars.compile($("#template-detail-players").html());
                    if ("Goalkeeper" == l.position) var g = Handlebars.compile($("#template-tonghop-players-thumon").html());
                    else g = Handlebars.compile($("#template-tonghop-players").html());
                    $("#box-content").replaceWith(c(l)),
                        $("#tonghop_all").html(g(l)),
                        Common.player_transfer([t], function (e) {
                            if (void 0 !== e.data && void 0 !== e.data[t] && e.data[t].data.length > 0) {
                                e = e.data[t].data;
                                var a = "";
                                for (var i in (e.sort(function (e, a) {
                                    return new Date(a.transfer_date) - new Date(e.transfer_date);
                                }),
                                e)) {
                                    var n = '<img src="' + css_url_vne + '/dulieubongda/images/graphics/team_logo_placeholder.png" alt="' + e[i].team_out.team_name + '">';
                                    void 0 !== e[i].team_out.logo && "" != e[i].team_out.logo && (n = '<img src="' + e[i].team_out.logo + '" alt="' + e[i].team_out.team_name + '">');
                                    var l = "/the-thao/du-lieu-bong-da/doi-bong/" + Common.nonAccentVietnamese(e[i].team_out.team_name.toLowerCase()).replace(/'| /g, "-") + "-" + e[i].team_out.team_id,
                                        o = '<img src="' + css_url_vne + '/dulieubongda/images/graphics/team_logo_placeholder.png" alt="' + e[i].team_in.team_name + '">';
                                    void 0 !== e[i].team_in.logo && "" != e[i].team_in.logo && (o = '<img src="' + e[i].team_in.logo + '" alt="' + e[i].team_in.team_name + '">');
                                    var d = "/the-thao/du-lieu-bong-da/doi-bong/" + Common.nonAccentVietnamese(e[i].team_in.team_name.toLowerCase()).replace(/'| /g, "-") + "-" + e[i].team_in.team_id,
                                        s = new Date(e[i].transfer_date),
                                        r = s.getDate() + "/" + parseInt(s.getMonth() + 1) + "/" + s.getFullYear(),
                                        u = void 0 !== e[i].type ? e[i].type : "-";
                                    a += `<tr>\n                                                    <td>\n                                                        <a href="${l}" class="icon-tip">\n                                                            ${n}\n                                                            <span class="tip-txt">${e[i].team_out.team_name}</span>\n                                                        </a>\n                                                    </td>\n                                                    <td>\n                                                        <a href="${d}" class="icon-tip">\n                                                            ${o}\n                                                            <span class="tip-txt">${e[i].team_in.team_name}</span>\n                                                        </a>\n                                                    </td>\n                                                    <td>${r}</td>\n                                                    <td>${u}</td>\n                                                </tr>`;
                                }
                                $("#templateBoxTransferPlayer").find("table tbody").html(a), $("#templateBoxTransferPlayer").show();
                            }
                        }),
                        a(),
                        $(".select-op-kq a").click(function () {
                            var e = $("#tonghop_all").height();
                            e > 0 && $("#tonghop_filter").css("height", e + "px");
                            var i = $(this).data("type");
                            $(".select-op-kq ." + i + "-filter a").removeClass("active"), $(this).addClass("active"), $("#text-filter-" + i).html($(this).html()), $(".select-op-kq").removeAttr("open");
                            var n = $(".season-filter a.active").data("season"),
                                l = $(".league-filter a.active").data("league");
                            if ("all" == l && "all" == n) $("#tonghop_all").removeClass("hidden"), $("#tonghop_filter").addClass("hidden");
                            else {
                                $("#tonghop_all").addClass("hidden"), $("#tonghop_filter").html("").removeClass("hidden");
                                var o = "player_id=" + t;
                                void 0 !== l && "all" != l && (o += "&league_code=" + l), void 0 !== n && "all" != n && (o += "&season=" + n);
                                var d = {
                                    shots: { total: 0, on: 0 },
                                    goals: { total: 0, conceded: 0, assists: 0, saves: 0 },
                                    passes: { total: 0, key: 0, accuracy: 0 },
                                    tackles: { total: 0, blocks: 0, interceptions: 0 },
                                    duels: { total: 0, won: 0 },
                                    dribbles: { attempts: 0, success: 0 },
                                    fouls: { drawn: 0, committed: 0 },
                                    cards: { yellow: 0, yellowred: 0, red: 0 },
                                    penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 },
                                    games: { appearences: 0, minutes_played: 0, lineups: 0 },
                                    substitutes: { in: 0, out: 0, bench: 0 },
                                };
                                Common.player_statistic(o, function (e) {
                                    var i = e.data[t].data;
                                    for (var n in i) for (var l in d) for (var o in d[l]) null != typeof i[n][l][o] && i[n][l][o] > 0 && (d[l][o] += parseInt(i[n][l][o]));
                                    d.games.appearences > 0 && d.games.minutes_played > 0 && (d.games.minutes_played_avg = Math.ceil(d.games.minutes_played / d.games.appearences)),
                                        d.shots.total > 0 && d.shots.on > 0 && ((d.shots.percent = Math.round((d.shots.on / d.shots.total) * 1e4) / 100 + "%"), (d.shots.percent = d.shots.percent.replace(".", ","))),
                                        $("#tonghop_filter").html(g(d)),
                                        a();
                                });
                            }
                        }),
                        $("body").click(function (e) {
                            $(e.target).closest(".select-op-kq").length || $("details.select-op-kq").removeAttr("open");
                        }),
                        void 0 !== $("body").attr("tax-id") &&
                            Common.get_list_news_by_tax($("body").attr("tax-id"), 7, function (a) {
                                void 0 !== a.data.articles &&
                                    a.data.articles.data.length > 0 &&
                                    (e.parseNews(a.data.articles.data, { link_news: "https://vnexpress.net" + a.data.tax_url }),
                                    Common.importScript(js_url_vne + "/v3/pc/usi.js", function () {
                                        CmtWidget.mix();
                                    }),
                                    $("#block-news").find(".block.block-news").addClass("block-news-nopadding"));
                            });
                } else $("#box-content").replaceWith('<div class="wrap-block-giaidau p24"><p style="text-align: center;">Dữ liệu cầu thủ chưa cập nhật</p></div>');
            });
        }
    },
    pageTeams: function () {
        var e = this;
        $("#wrap-ttlive").remove("");
        var a = function (a) {
                $("#inp_keyword").keydown(function (e) {
                    13 == e.keyCode && 0 == $(this).val().length && e.preventDefault();
                }),
                    $("#inp_keyword").keyup(function () {
                        0 != $(this).val().length ? $("#search-team button").attr("disabled", !1) : $("#search-team button").attr("disabled", !0);
                    }),
                    $("#inp_keyword").typing({
                        stop: function (t, i) {
                            (dataSearch = Common.searchTeams(a, $("#inp_keyword").val())),
                                void 0 !== dataSearch.dataSuggest && "" != dataSearch.dataSuggest
                                    ? ($(".wrap-suggest.list-team").css("display", "inline-block"), $(".wrap-suggest.list-team .inner-suggest").html(dataSearch.dataSuggest), e.highlight($("#inp_keyword").val(), "teamname-suggest"))
                                    : ($(".wrap-suggest.list-team").css("display", "none"), $(".wrap-suggest.list-team .inner-suggest").html(""));
                        },
                        delay: 400,
                    }),
                    $("#inp_keyword").on("blur", function () {
                        setTimeout(function () {
                            $(".wrap-suggest.list-team").css("display", "none");
                        }, 400);
                    }),
                    $("#inp_keyword").on("focus", function () {
                        "" == $(this).val() && $(".wrap-suggest.list-team .inner-suggest").html(""), "" != $(".wrap-suggest.list-team .inner-suggest").html() && $(".wrap-suggest.list-team").css("display", "inline-block");
                    });
            },
            t = function (a) {
                $("#content-data").html("");
                var t = Handlebars.compile($("#template-index-doibong").html());
                for (var i in Common.settings.sort_league_all_team) {
                    league_id = Common.settings.sort_league_all_team[i];
                    var n = t({ data: e.groupTeamByLeauge(a[league_id], league_id) });
                    $("#content-data").append(n);
                }
            };
        Common.list_team(Common.settings.leagues_id, function (i) {
            if (i.code) {
                var n = new URLSearchParams(window.location.search),
                    l = [];
                if (n.has("teamname")) {
                    var o = n.get("teamname");
                    if ("" != (o = $.trim(o))) (l = Common.searchTeams(i.data, o)), t(l.dataFilter), $(".wrap-suggest.list-team .inner-suggest").html(l.dataSuggest), e.highlight(o, "name-team");
                    else {
                        t(i.data);
                        var d = window.location.origin + window.location.pathname;
                        history.pushState({}, document.title, d);
                    }
                } else t(i.data);
                a(i.data);
            }
        });
    },
    highlight: function (e, a) {
        setTimeout(function () {
            var t = document.getElementsByClassName(a);
            for (var i in t) {
                var n = t[i].innerHTML;
                if (n && "" != e) {
                    var l = n.toLowerCase(),
                        o = e.toLowerCase(),
                        d = l.indexOf(o);
                    d >= 0 && ((n = n.substring(0, d) + "<span style='font-weight: 700;'>" + n.substring(d, d + e.length) + "</span>" + n.substring(d + e.length)), (t[i].innerHTML = n));
                }
            }
        }, 500);
    },
    groupTeamByLeauge: function (e, a) {
        var t = 0,
            i = 0,
            n = [],
            l = [];
        return (
            (start = 0),
            (end = 0),
            (lennew = 0),
            (index = 0),
            (image_path = css_url_vne + "/dulieubongda/pc/images/graphics/"),
            void 0 !== e &&
                void 0 !== e.data &&
                (index++,
                (t = e.data.length),
                (l = []),
                (i = Math.ceil(t / 4)),
                (l[0] = e.data.slice(0, i)),
                (lennew = t - i),
                (start = i),
                (i = Math.ceil(lennew / 3)),
                (end = start + Math.ceil(lennew / 3)),
                (l[1] = e.data.slice(start, end)),
                (lennew -= i),
                (start = end),
                (i = Math.ceil(lennew / 2)),
                (end = i + start),
                (l[2] = e.data.slice(start, end)),
                (start = end),
                (end = lennew - i + start),
                (l[3] = e.data.slice(start, end)),
                (n[a] = { image_path: image_path, index: index, league_info: Common.settings.leagues_list[a], blocks: l })),
            n.sort(function (e, a) {
                return e.index < a.index ? -1 : e.index > a.index ? 1 : 0;
            })
        );
    },
    loadLDKQ_DetailTeam: function (e, a, t) {
        var i = this;
        function n(e, a) {
            return e.time < a.time ? -1 : e.time > a.time ? 1 : 0;
        }
        var l = Handlebars.compile($("#template-box").html()),
            o = Handlebars.compile($("#template-ket-qua").html()),
            d = Handlebars.compile($("#template-lich-dau").html()),
            s = Handlebars.compile($("#template-_vongdau").html()),
            r = Handlebars.compile($("#placeholder-block").html());
        t.html("");
        var u = "",
            m = css_url_vne + "/dulieubongda/pc/images/graphics/",
            _ = [];
        for (var c in e.data) {
            var g = e.data[c],
                h = "",
                p = "";
            if (g && void 0 !== g && g.league_detail && void 0 !== g.league_detail) {
                var v = g.league_detail.id,
                    f = 0;
                void 0 === i.dataEffect.league_lichdau[v] && (i.dataEffect.league_lichdau[v] = []);
                var b = i.dataEffect.league_lichdau[v];
                for (var k in (g.lich_dau.sort(function (e, a) {
                    return e.event_timestamp < a.event_timestamp ? -1 : 1;
                }),
                g.lich_dau)) {
                    if (void 0 === g.lich_dau[k].round_int || g.lich_dau[k].round_int < 1) {
                        if (void 0 === Common.settings.mappingRound[g.lich_dau[k].round]) {
                            delete g.lich_dau[k];
                            continue;
                        }
                        g.lich_dau[k].round_int = Common.settings.mappingRound[g.lich_dau[k].round];
                    }
                    var C = (q = Common.convertUTCDateToLocalDate(new Date(g.lich_dau[k].event_date))).getHours() < 10 ? "0" + q.getHours() : q.getHours(),
                        w = q.getMinutes() < 10 ? "0" + q.getMinutes() : q.getMinutes();
                    g.lich_dau[k].event_date_show = C + ":" + w;
                    var y = !1;
                    (void 0 === b[(D = q.getDate() + "/" + parseInt(q.getMonth() + 1) + "/" + q.getFullYear())] || b[D].data.length <= 0) &&
                        ((y = !0),
                        (b[D] = []),
                        (b[D].data = []),
                        (b[D].time = g.lich_dau[k].event_date),
                        (b[D].showDateFilter = "<strong>" + Common.dayOfWeek[q.getDay()] + "</strong> " + D),
                        (i.dataEffect.league_date[v] && i.dataEffect.league_date[v].ld) || i.dataEffect.league_date[v] || (i.dataEffect.league_date[v] = { kq: [], ld: [] }),
                        i.dataEffect.league_date[v].ld.push({ format: D, time: q.getTime() })),
                        (g.lich_dau[k].head_vl = !1),
                        (f != g.lich_dau[k].round_int || y) && ((g.lich_dau[k].head_vl = !0), (f = g.lich_dau[k].round_int), (v != CHAMPION_LEAGUE && v != EUROPA_LEAGUE) || (8 != f && 16 != f) || (g.lich_dau[k].round_int = "1/" + f)),
                        b[D].data.push(g.lich_dau[k]);
                }
                b.sort(n), (i.dataEffect.league_lichdau[v] = b), (f = 0), void 0 === i.dataEffect.league_ketqua[v] && (i.dataEffect.league_ketqua[v] = []);
                var E = i.dataEffect.league_ketqua[v];
                for (var k in (g.ket_qua.sort(function (e, a) {
                    return e.event_timestamp >= a.event_timestamp ? -1 : 1;
                }),
                g.ket_qua)) {
                    if (void 0 === g.ket_qua[k].round_int || g.ket_qua[k].round_int < 1) {
                        if (void 0 === Common.settings.mappingRound[g.ket_qua[k].round]) {
                            delete g.ket_qua[k];
                            continue;
                        }
                        g.ket_qua[k].round_int = Common.settings.mappingRound[g.ket_qua[k].round];
                    }
                    if (g.ket_qua[k].elapsed < 90 || (g.ket_qua[k].elapsed >= 90 && "Match Finished" != g.ket_qua[k].status)) delete g.ket_qua[k];
                    else {
                        var q, D;
                        y = !1;
                        (void 0 === E[(D = (q = Common.convertUTCDateToLocalDate(new Date(g.ket_qua[k].event_date))).getDate() + "/" + parseInt(q.getMonth() + 1) + "/" + q.getFullYear())] || E[D].data.length <= 0) &&
                            ((y = !0),
                            (E[D] = []),
                            (E[D].data = []),
                            (E[D].time = g.ket_qua[k].event_date),
                            (E[D].showDateFilter = "<strong>" + Common.dayOfWeek[q.getDay()] + "</strong> " + D),
                            (i.dataEffect.league_date[v] && i.dataEffect.league_date[v].kq) || i.dataEffect.league_date[v] || (i.dataEffect.league_date[v] = { kq: [], ld: [] }),
                            i.dataEffect.league_date[v].kq.push({ format: D, time: q.getTime() })),
                            (void 0 !== g.ket_qua[k].score && void 0 !== g.ket_qua[k].score.halftime) || (g.ket_qua[k].score = { halftime: "0-0", fulltime: "0-0" }),
                            (g.ket_qua[k].head_vl = !1),
                            (f != g.ket_qua[k].round_int || y) && ((g.ket_qua[k].head_vl = !0), (f = g.ket_qua[k].round_int), (v != CHAMPION_LEAGUE && v != EUROPA_LEAGUE) || (8 != f && 16 != f) || (g.ket_qua[k].round_int = "1/" + f)),
                            E[D].data.push(g.ket_qua[k]);
                    }
                }
                E.sort(n), (i.dataEffect.league_ketqua[v] = E);
                var x = 0,
                    H = Object.keys(i.dataEffect.league_lichdau[v])[0],
                    A = i.dataEffect.league_lichdau[v][H],
                    I = A && void 0 !== A.showDateFilter ? A.showDateFilter : "";
                if (void 0 !== A)
                    for (var k in A.data)
                        A.data.length > 6
                            ? (x < 5 ||
                                  ((item_hide = A.data.length - 5),
                                  6 == x && (h += '<div class="doidau lichdau flexbox trankhac"><div class="text-trankhac"><span>...</span><span>' + item_hide + " trận khác cùng ngày</span></div></div>"),
                                  (A.data[k].hidden = !0)),
                              (h += s(A.data[k])))
                            : (h += s(A.data[k])),
                            x++;
                H = Object.keys(i.dataEffect.league_ketqua[v])[Object.keys(i.dataEffect.league_ketqua[v]).length - 1];
                var L = i.dataEffect.league_ketqua[v][H],
                    F = L ? L.showDateFilter : "";
                if (void 0 !== L)
                    for (var k in L.data)
                        L.data.length > 6
                            ? (x < 5 ||
                                  ((item_hide = L.data.length - 5),
                                  6 == x && (p += '<div class="doidau lichdau flexbox trankhac"><div class="text-trankhac"><span>...</span><span>' + item_hide + " trận khác cùng ngày</span></div></div>"),
                                  (L.data[k].hidden = !0)),
                              (p += s(L.data[k])),
                              x++)
                            : (p += s(L.data[k]));
                var T = "",
                    M = !1;
                A ? (T = d({ vongdau: h, league_link: Common.settings.leagues_list[v].link, showDateFilter: I, league_id: v })) : ((T = d({ vongdau: "", showDateFilter: "-<br>-", league_id: v, league_link: !1 })), (M = !0));
                var U = "",
                    O = !1;
                L
                    ? (U = o({ vongdau: p, showDateFilter: F, league_id: v, league_link: Common.settings.leagues_list[v].link, max_index: i.dataEffect.league_date[v].kq.length - 1 }))
                    : ((U = o({ vongdau: "", showDateFilter: "-<br>-", league_id: v, league_link: !1 })), (O = !0)),
                    (u = T + U),
                    (u += r({ league_id: g.league_detail.id })),
                    _.push(g.league_detail.id);
                var P = { code: g.league_detail.code, css_id: g.league_detail.css_id, logo: m + g.league_detail.logo, name: g.league_detail.name, link: g.league_detail.link, content: u };
                t.append(l(P)),
                    $(".trankhac").click(function () {
                        $(this).closest(".vongdau").find("div.wvd").removeClass("hidden"), $(this).remove();
                    }),
                    i.dataEffect.league_date[v].ld.sort(n),
                    i.dataEffect.league_date[v].kq.sort(n),
                    i.home_filter_vongdau(v),
                    M &&
                        $("#box-lichdau-" + v)
                            .find(".select-date span")
                            .addClass("disable"),
                    O &&
                        $("#box-ketqua-" + v)
                            .find(".select-date span")
                            .addClass("disable");
            }
        }
        Common.data_bangdiem(_, function (e) {
            if (e.code) {
                var t = Handlebars.compile($("#template-bang-diem").html()),
                    n = Handlebars.compile($("#template-bang-diem-vl").html()),
                    l = Handlebars.compile($("#template-_scoreitem").html());
                for (let c in e.data)
                    if (void 0 !== e.data[c].data && e.data[c].data.length > 0) {
                        let g = e.data[c].data;
                        if (Common.settings.uefa_list.includes(parseInt(c))) {
                            var o = [],
                                d = -1;
                            for (var s in g) {
                                var r = g[s];
                                void 0 !== o[r.group_id] && o[r.group_id].data.length > 0 ? o[r.group_id].data.push(r) : ((o[r.group_id] = []), (o[r.group_id].data = [r]), (o[r.group_id].vongbang = Common.getGroupFromString(r.group)));
                            }
                            for (var u in o) {
                                let e = !1;
                                for (var m in o[u].data)
                                    if (o[u].data[m].team_id == a) {
                                        (e = !0), (o[u].data[m].highlight = "highlight"), (d = parseInt(o[u].data[m].group_id));
                                        break;
                                    }
                                e || delete o[u];
                            }
                            (i.dataEffect.standings[c] = { data: o, lid: c, vongbang: { group_next: 0, group_prev: 0, group_id: d, total: o.length - 1 } }),
                                void 0 !== o[d]
                                    ? $("#box_score_" + c)
                                          .html(
                                              n({
                                                  lid: c,
                                                  bangdiem: l({ data: o[d].data }),
                                                  league_link: Common.settings.leagues_list[c].link,
                                                  vongbang: { name: o[d].vongbang, group_next: 0, group_prev: 0, group_id: d, total: o.length },
                                              })
                                          )
                                          .removeClass("box-placeholder")
                                          .addClass("bangdiem")
                                    : $("#box_score_" + c).html("");
                        } else {
                            let e = g.length,
                                i = 0;
                            for (let e in g) if ((i++, g[e].team_id == a)) break;
                            var _ = [];
                            if (i <= 5) (_ = g.slice(0, 5))[i - 1].highlight = "highlight";
                            else {
                                i -= 1;
                                let a = 0,
                                    t = 0;
                                (g[i].highlight = "highlight"), _.push(g[i]);
                                for (let n = 1; n <= 4 && ((a = i - n), a > 0 && void 0 !== g[a] && _.push(g[a]), (t = i + n), t <= e && void 0 !== g[t] && _.push(g[t]), !(_.length >= 5 || Object.size(_) >= 5)); n++);
                                _.sort(function (e, a) {
                                    return e.rank < a.rank ? -1 : e.rank > a.rank ? 1 : 0;
                                });
                            }
                            $("#box_score_" + c).replaceWith(t({ bangdiem: l({ data: _ }), league_link: Common.settings.leagues_list[c].link }));
                        }
                    } else $("#box_score_" + c).replaceWith(t({ bangdiem: "zz", league_link: !1 })), $("#box_score_" + c + " table").remove(), $("#box_score_" + c + " .btnreadmore").remove();
            } else {
                t = Handlebars.compile($("#template-bang-diem").html());
                $('[id^="box_score_"]').replaceWith(t({ bangdiem: "", league_link: !1 })), $(".bangdiem table").remove(), $(".bangdiem .btnreadmore").remove();
            }
        });
    },
    pageTeamsDetail: function () {
        var e = this,
            a = $("#wrapper-doi-bong").data("teamid");
        $("body").addClass("page-lichdau");
        var t = function (e) {
                if (void 0 !== e.leagues) {
                    var a = e.leagues.filter(function (e) {
                        return void 0 !== e.flag;
                    });
                    a.length > 0 && ((a = a[0]), (e.country_logo = '<img style="max-width:20px;" src="' + a.flag + '" alt="' + e.country_name + '">'));
                }
                var t = Handlebars.compile($("#template-header").html());
                $("#header-teams").replaceWith(t({ team: e }));
            },
            i = $("#wrapper-doi-bong").data("tabactive");
        "index" == i
            ? ($("body").removeClass("page-lichdau"),
              Common.fixtures_by_team(a, function (i) {
                  if (i.code) {
                      t(i.team_detail), (i.team_detail.pagetype = "index");
                      var n = [];
                      for (var l in i.team_detail.leagues) Common.settings.leagues_id.includes(i.team_detail.leagues[l].league_id) && n.push(i.team_detail.leagues[l].league_id);
                      n
                          ? Common.data_live(n, function (e) {
                                if (e.code) {
                                    var a = Handlebars.compile($("#template-truc-tiep").html());
                                    for (var t in n) {
                                        var i = n[t],
                                            l = Common.settings.leagues_list[i];
                                        if (e.data[i] && void 0 !== e.data[i].data)
                                            for (var o in e.data[i].data) {
                                                var d = e.data[i].data[o];
                                                if (
                                                    ((i != CHAMPION_LEAGUE && i != EUROPA_LEAGUE) || (8 != d.round_int && 16 != d.round_int) || (d.round_int = "1/" + d.round_int),
                                                    (d.head_vl = l.name + " - Vòng " + d.round_int),
                                                    void 0 !== d.events)
                                                ) {
                                                    var s = Common.mappingEvent(d.events, d.elapsed);
                                                    (d.event_home = s[d.home_team.team_id]), (d.event_away = s[d.away_team.team_id]), (d.percent_map = s.percent_map);
                                                }
                                                (void 0 === d.percent_map || d.percent_map <= 0) && (d.percent_map = d.elapsed > 90 ? (100 / d.elapsed) * d.elapsed : (100 / 90) * d.elapsed), (e.data[i].data[o] = d);
                                            }
                                        else delete e.data[i];
                                    }
                                    var r = "";
                                    Object.size(e.data) > 0
                                        ? ((r = a(e)),
                                          $("#wrap-ttlive").removeClass("box-placeholder"),
                                          $("#truc-tiep").replaceWith(r),
                                          $(".btn-timeline").click(function () {
                                              $(this).parent().toggleClass("open");
                                          }))
                                        : $("#wrap-ttlive").remove("");
                                } else $("#wrap-ttlive").remove("");
                            })
                          : $("#wrap-ttlive").remove(""),
                          delete i.index.live;
                      var o = Common.sortDataLeague(i.index, !1);
                      e.loadLDKQ_DetailTeam({ data: o }, a, $("#box-leagues"));
                  } else $("#box-leagues").remove(), $("#wrap-ttlive").remove("");
                  void 0 !== $("body").attr("tax-id") &&
                      Common.get_list_news_by_tax($("body").attr("tax-id"), 7, function (a) {
                          void 0 !== a.data.articles &&
                              a.data.articles.data.length > 0 &&
                              ((i.team_detail.dataTax = a.data.articles.data),
                              e.parseNews(a.data.articles.data, { link_news: "https://vnexpress.net" + a.data.tax_url }),
                              Common.importScript(js_url_vne + "/v3/pc/usi.js", function () {
                                  CmtWidget.mix();
                              }),
                              $("#block-news").find(".block.block-news").addClass("block-news-nopadding"));
                      });
              }))
            : "ket-qua" == i
            ? Common.fixtures_by_team(a, function (a) {
                  if (a.code) {
                      t(a.team_detail);
                      var i = Handlebars.compile($("#template-ketqua-full").html()),
                          n = Handlebars.compile($("#template-view-ketqua").html()),
                          l = [],
                          o = a.ket_qua,
                          d = [],
                          s = css_url_vne + "/dulieubongda/pc/images/graphics/",
                          r = "",
                          u = [],
                          m = [];
                      for (var _ in o)
                          if (((m = o[_]), 0, (u = Common.settings.leagues_list[m.league_id]) && void 0 !== m.round_int && !(m.round_int <= 0))) {
                              var c = Common.convertUTCDateToLocalDate(new Date(m.event_date)),
                                  g = c.getHours() < 10 ? "0" + c.getHours() : c.getHours(),
                                  h = c.getMinutes() < 10 ? "0" + c.getMinutes() : c.getMinutes(),
                                  p = c.getDate() + "/" + parseInt(c.getMonth() + 1) + "/" + c.getFullYear();
                              (m.event_date_show = g + ":" + h),
                                  (m.league_id != CHAMPION_LEAGUE && m.league_id != EUROPA_LEAGUE) || (8 != m.round_int && 16 != m.round_int) || (m.round_int = "1/" + m.round_int),
                                  (m.head_vl = u.name + " - Vòng " + m.round_int),
                                  (void 0 !== m.score && void 0 !== m.score.halftime) || (m.score = { halftime: "0-0", fulltime: "0-0" }),
                                  (m.score.halftime = m.score.halftime.replace("-", " - ")),
                                  l.push({ showDateFilter: Common.dayOfWeek[c.getDay()] + " " + p, data: [m], league_id: m.league_id, time: new Date(c.getTime()) }),
                                  (d[m.league_id] = u);
                          }
                      if (
                          ($("#box-leagues")
                              .html(i({ view_ketqua_html: n({ dataItem: l }) }))
                              .removeClass("box-placeholder"),
                          Object.size(d) > 1)
                      ) {
                          for (var v in (d.sort(function (e, a) {
                              return e.name < a.name ? -1 : e.name > a.name ? 1 : 0;
                          }),
                          d))
                              (r = `<a href="javascript:;" data-lid="${d[v].id}" class="filter-league"><img src="${s + d[v].logo}" alt="${d[v].name}"><span class="name">${d[v].name}</span></a>`),
                                  $("#filter-league .inner-scroll").append(r);
                          $("#filter-league .inner-scroll a").click(function () {
                              $("a.filter-league").removeClass("active"), $(this).addClass("active");
                              var e = $(this).data("lid");
                              "all" == e
                                  ? ($(".wrap-block-giaidau.wvd").removeClass("hidden"), $(".label-op-active span").html("Tất cả các giải"))
                                  : ($(".wrap-block-giaidau.wvd").addClass("hidden"), $(".wrap-block-giaidau.wvd.leauge-" + e).removeClass("hidden"), $(".label-op-active span").html($(this).find("span.name").html())),
                                  $("details.select-op-kq").removeAttr("open");
                          });
                      } else $("details.select-op-kq").remove();
                      e.eventDetailFixture();
                  } else $("#box-leagues").remove();
              })
            : "doi-hinh" == i
            ? Common.player_team(a, function (e) {
                  if (e.code) {
                      t(e.team_detail);
                      var a = Handlebars.compile($("#template-player-of-teams").html());
                      $("#box-leagues").replaceWith(a({ team: e.data, total: Object.size(e.data) }));
                  } else $("#box-leagues").remove();
              })
            : "chuyen-nhuong" == i
            ? Common.chuyen_nhuong(a, function (e) {
                  t(e.team_detail);
                  var i = Handlebars.compile($("#template-chuyennhuong").html());
                  if (e.data.data) {
                      var n,
                          l,
                          o,
                          d,
                          s = e.data.data,
                          r = new Date(),
                          u = [],
                          m = 0;
                      for (var _ in s)
                          s[_].transfer_date < 999999 &&
                              ((o = parseInt(s[_].transfer_date[0] + "" + s[_].transfer_date[1])),
                              (l = parseInt(s[_].transfer_date[2] + "" + s[_].transfer_date[3])),
                              (n = parseInt("20" + s[_].transfer_date[4] + s[_].transfer_date[5])) > r.getFullYear() && (n = parseInt("19" + s[_].transfer_date[4] + s[_].transfer_date[5])),
                              (s[_].transfer_date = n + "-" + l + "-" + o)),
                              (d = s[_].transfer_date.split("-")),
                              (s[_].date_short = parseInt(d[2]) + "/" + parseInt(d[1])),
                              (n = parseInt(d[0])),
                              (s[_].year = n),
                              n > r.getFullYear() ? delete s[_] : (0 == u.includes(n) && u.push(n), (m = m > n ? m : n));
                      u.sort(function (e, a) {
                          return e > a ? -1 : e < a ? 1 : 0;
                      }),
                          (u = u.slice(0, 10));
                      var c = "",
                          g = "";
                      for (var _ in u) (g = m == u[_] ? "active" : ""), (c += '<a href="#" data-year="' + u[_] + '" class="cn ' + g + '">' + u[_] + "</a>");
                      s.sort(function (e, a) {
                          return e.transfer_date < a.transfer_date ? 1 : e.transfer_date > a.transfer_date ? -1 : 0;
                      }),
                          $("#box-leagues").replaceWith(i({ data: s, year_max: m, strFilter: c, team_id: a })),
                          $(".select-op-kq .sub-select-op a").click(function () {
                              $(".sub-select-op a.cn").removeClass("active"), $(this).addClass("active");
                              var e = $(this).data("year");
                              $(".label-op-active span").html(e),
                                  $(".tbl-data-chuyennhuong .chuyen-nhuong").addClass("hidden"),
                                  $(".tbl-data-chuyennhuong .chuyen-nhuong.year-" + e).removeClass("hidden"),
                                  $(".select-op-kq").removeAttr("open");
                          });
                  } else $("#box-leagues").remove();
              })
            : "lich-thi-dau" == i &&
              Common.fixtures_by_team(a, function (e) {
                  if (e.code) {
                      t(e.team_detail);
                      var a = Handlebars.compile($("#template-_vongdau").html()),
                          i = Handlebars.compile($("#template-lich-dau-teams").html()),
                          n = Handlebars.compile($("#template-view-lichdau").html()),
                          l = [],
                          o = e.lich_dau,
                          d = [],
                          s = css_url_vne + "/dulieubongda/pc/images/graphics/",
                          r = "",
                          u = [];
                      for (var m in o)
                          if (((r = ""), (u = Common.settings.leagues_list[o[m].league_id]) && void 0 !== o[m].round_int && !(o[m].round_int <= 0))) {
                              var _ = Common.convertUTCDateToLocalDate(new Date(o[m].event_date)),
                                  c = _.getHours() < 10 ? "0" + _.getHours() : _.getHours(),
                                  g = _.getMinutes() < 10 ? "0" + _.getMinutes() : _.getMinutes();
                              (o[m].event_date_show = c + ":" + g),
                                  (o[m].title_head = u.name + " - Vòng " + o[m].round_int),
                                  (o[m].showDateFilter = Common.dayOfWeek[_.getDay()] + " " + _.getDate() + "/" + parseInt(_.getMonth() + 1) + "/" + _.getFullYear()),
                                  (r += a(o[m])),
                                  l.push({ showDateFilter: o[m].showDateFilter, vongdau: r, league_id: o[m].league_id }),
                                  (d[o[m].league_id] = u);
                          }
                      if (
                          ($("#box-leagues")
                              .html(i({ lichdau_html: n({ dataItem: l }) }))
                              .removeClass("box-placeholder"),
                          Object.size(d) > 1)
                      ) {
                          for (var h in (d.sort(function (e, a) {
                              return e.name < a.name ? -1 : e.name > a.name ? 1 : 0;
                          }),
                          d))
                              (r = `<a href="javascript:;" data-lid="${d[h].id}" class="filter-league"><img src="${s + d[h].logo}" alt="${d[h].name}"><span class="name">${d[h].name}</span></a>`),
                                  $("#filter-league .inner-scroll").append(r);
                          $("#filter-league .inner-scroll a").click(function () {
                              $("a.filter-league").removeClass("active"), $(this).addClass("active");
                              var e = $(this).data("lid");
                              "all" == e ? $(".wrap-block-giaidau.wvd").removeClass("hidden") : ($(".wrap-block-giaidau.wvd").addClass("hidden"), $(".wrap-block-giaidau.wvd.leauge-" + e).removeClass("hidden")),
                                  $("details.select-op-kq").removeAttr("open");
                          });
                      } else $("details.select-op-kq").remove();
                  } else $("#box-leagues").remove();
              });
    },
    home: function () {
        var e = this,
            a = Handlebars.compile($("#init-html").html());
        $("#_apphome").html(a()),
            $("body").addClass("home-page"),
            (e.dataEffect = { standings: [], league_lichdau: [], league_ketqua: [], league_date: [] }),
            Common.data_live(Common.settings.leagues_id, function (e) {
                if (e.code) {
                    var a = Handlebars.compile($("#template-truc-tiep").html()),
                        t = Common.settings.leagues_list,
                        i = css_url_vne + "/dulieubongda/pc/images/graphics/";
                    for (var n in t) {
                        var l = t[n].id;
                        if (e.data[l] && void 0 !== e.data[l].data) {
                            var o = 0;
                            for (var d in e.data[l].data) {
                                var s = e.data[l].data[d];
                                if (((s.head_vl = !1), o != s.round_int && ((s.head_vl = !0), (o = s.round_int), (l != CHAMPION_LEAGUE && l != EUROPA_LEAGUE) || (8 != o && 16 != o) || (s.round_int = "1/" + o)), void 0 !== s.events)) {
                                    var r = Common.mappingEvent(s.events, s.elapsed);
                                    (s.event_home = r[s.home_team.team_id]), (s.event_away = r[s.away_team.team_id]), (s.percent_map = r.percent_map);
                                }
                                (void 0 === s.percent_map || s.percent_map <= 0) && (s.percent_map = s.elapsed > 90 ? (100 / s.elapsed) * s.elapsed : (100 / 90) * s.elapsed), (e.data[l].data[d] = s);
                            }
                            (e.data[l].detail = t[n]), (e.data[l].detail.logo = i + t[n].logo);
                        } else delete e.data[l];
                    }
                    var u = "";
                    Object.size(e.data) > 0
                        ? ((u = a(e)),
                          $("#wrap-ttlive").removeClass("box-placeholder"),
                          $("#truc-tiep").replaceWith(u),
                          $(".btn-timeline").click(function () {
                              $(this).parent().toggleClass("open");
                          }))
                        : $("#wrap-ttlive").remove("");
                } else $("#wrap-ttlive").remove("");
            }),
            e.loadLDKQ([PREMIER_LEAGUE], $("#box-leagues-premier"));
        var t = [];
        for (var i in Common.settings.leagues_id) PREMIER_LEAGUE != Common.settings.leagues_id[i] && t.push(Common.settings.leagues_id[i]);
        e.loadLDKQ(t, $("#box-leagues"));
    },
    loadLDKQ: function (e, a) {
        var t = this;
        function i(e, a) {
            return e.time < a.time ? -1 : e.time > a.time ? 1 : 0;
        }
        Common.lich_dau(e, !0, function (e) {
            var n = Handlebars.compile($("#template-box").html()),
                l = Handlebars.compile($("#template-ket-qua").html()),
                o = Handlebars.compile($("#template-lich-dau").html()),
                d = Handlebars.compile($("#template-_vongdau").html()),
                s = Handlebars.compile($("#placeholder-block").html());
            if ((a.html(""), e.code)) {
                var r = "",
                    u = css_url_vne + "/dulieubongda/pc/images/graphics/",
                    m = [];
                for (var _ in e.data) {
                    var c = e.data[_],
                        g = "",
                        h = "";
                    if (void 0 !== c && void 0 !== c.league_detail) {
                        var p = c.league_detail.id,
                            v = 0;
                        void 0 === t.dataEffect.league_lichdau[p] && (t.dataEffect.league_lichdau[p] = []);
                        var f = t.dataEffect.league_lichdau[p];
                        for (var b in (c.lich_dau.sort(function (e, a) {
                            return e.event_timestamp < a.event_timestamp ? -1 : 1;
                        }),
                        c.lich_dau)) {
                            if (void 0 === c.lich_dau[b].round_int || c.lich_dau[b].round_int < 1) {
                                if (void 0 === Common.settings.mappingRound[c.lich_dau[b].round]) {
                                    delete c.lich_dau[b];
                                    continue;
                                }
                                c.lich_dau[b].round_int = Common.settings.mappingRound[c.lich_dau[b].round];
                            }
                            var k = (E = Common.convertUTCDateToLocalDate(new Date(c.lich_dau[b].event_date))).getHours() < 10 ? "0" + E.getHours() : E.getHours(),
                                C = E.getMinutes() < 10 ? "0" + E.getMinutes() : E.getMinutes();
                            c.lich_dau[b].event_date_show = k + ":" + C;
                            var w = !1;
                            (void 0 === f[(q = E.getDate() + "/" + parseInt(E.getMonth() + 1) + "/" + E.getFullYear())] || f[q].data.length <= 0) &&
                                ((w = !0),
                                (f[q] = []),
                                (f[q].data = []),
                                (f[q].time = c.lich_dau[b].event_date),
                                (f[q].showDateFilter = "<strong>" + Common.dayOfWeek[E.getDay()] + "</strong> " + q),
                                (t.dataEffect.league_date[p] && t.dataEffect.league_date[p].ld) || t.dataEffect.league_date[p] || (t.dataEffect.league_date[p] = { kq: [], ld: [] }),
                                t.dataEffect.league_date[p].ld.push({ format: q, time: E.getTime() })),
                                (c.lich_dau[b].head_vl = !1),
                                (v != c.lich_dau[b].round_int || w) &&
                                    ((c.lich_dau[b].head_vl = !0), (v = c.lich_dau[b].round_int), (p != CHAMPION_LEAGUE && p != EUROPA_LEAGUE) || (8 != v && 16 != v) || (c.lich_dau[b].round_int = "1/" + v)),
                                f[q].data.push(c.lich_dau[b]);
                        }
                        f.sort(i), (t.dataEffect.league_lichdau[p] = f), (v = 0), void 0 === t.dataEffect.league_ketqua[p] && (t.dataEffect.league_ketqua[p] = []);
                        var y = t.dataEffect.league_ketqua[p];
                        for (var b in (c.ket_qua.sort(function (e, a) {
                            return e.event_timestamp >= a.event_timestamp ? -1 : 1;
                        }),
                        c.ket_qua)) {
                            if (void 0 === c.ket_qua[b].round_int || c.ket_qua[b].round_int < 1) {
                                if (void 0 === Common.settings.mappingRound[c.ket_qua[b].round]) {
                                    delete c.ket_qua[b];
                                    continue;
                                }
                                c.ket_qua[b].round_int = Common.settings.mappingRound[c.ket_qua[b].round];
                            }
                            if (c.ket_qua[b].elapsed < 90 || (c.ket_qua[b].elapsed >= 90 && "Match Finished" != c.ket_qua[b].status)) delete c.ket_qua[b];
                            else {
                                var E, q;
                                w = !1;
                                (void 0 === y[(q = (E = Common.convertUTCDateToLocalDate(new Date(c.ket_qua[b].event_date))).getDate() + "/" + parseInt(E.getMonth() + 1) + "/" + E.getFullYear())] || y[q].data.length <= 0) &&
                                    ((w = !0),
                                    (y[q] = []),
                                    (y[q].data = []),
                                    (y[q].time = c.ket_qua[b].event_date),
                                    (y[q].showDateFilter = "<strong>" + Common.dayOfWeek[E.getDay()] + "</strong> " + q),
                                    (t.dataEffect.league_date[p] && t.dataEffect.league_date[p].kq) || t.dataEffect.league_date[p] || (t.dataEffect.league_date[p] = { kq: [], ld: [] }),
                                    t.dataEffect.league_date[p].kq.push({ format: q, time: E.getTime() })),
                                    (void 0 !== c.ket_qua[b].score && void 0 !== c.ket_qua[b].score.halftime) || (c.ket_qua[b].score = { halftime: "0-0", fulltime: "0-0" }),
                                    (c.ket_qua[b].head_vl = !1),
                                    (v != c.ket_qua[b].round_int || w) &&
                                        ((c.ket_qua[b].head_vl = !0), (v = c.ket_qua[b].round_int), (p != CHAMPION_LEAGUE && p != EUROPA_LEAGUE) || (8 != v && 16 != v) || (c.ket_qua[b].round_int = "1/" + v)),
                                    y[q].data.push(c.ket_qua[b]);
                            }
                        }
                        y.sort(i), (t.dataEffect.league_ketqua[p] = y);
                        var D = 0,
                            x = Object.keys(t.dataEffect.league_lichdau[p])[0],
                            H = t.dataEffect.league_lichdau[p][x],
                            A = H && void 0 !== H.showDateFilter ? H.showDateFilter : "";
                        if (void 0 !== H)
                            for (var b in H.data)
                                H.data.length > 6
                                    ? (D < 5 ||
                                          ((item_hide = H.data.length - 5),
                                          6 == D && (g += '<div class="doidau lichdau flexbox trankhac"><div class="text-trankhac"><span>...</span><span>' + item_hide + " trận khác cùng ngày</span></div></div>"),
                                          (H.data[b].hidden = !0)),
                                      (g += d(H.data[b])))
                                    : (g += d(H.data[b])),
                                    D++;
                        x = Object.keys(t.dataEffect.league_ketqua[p])[Object.keys(t.dataEffect.league_ketqua[p]).length - 1];
                        var I = t.dataEffect.league_ketqua[p][x],
                            L = I ? I.showDateFilter : "";
                        if (void 0 !== I)
                            for (var b in I.data)
                                I.data.length > 6
                                    ? (D < 5 ||
                                          ((item_hide = I.data.length - 5),
                                          6 == D && (h += '<div class="doidau lichdau flexbox trankhac"><div class="text-trankhac"><span>...</span><span>' + item_hide + " trận khác cùng ngày</span></div></div>"),
                                          (I.data[b].hidden = !0)),
                                      (h += d(I.data[b])),
                                      D++)
                                    : (h += d(I.data[b]));
                        var F = "",
                            T = !1;
                        H ? (F = o({ vongdau: g, league_link: Common.settings.leagues_list[p].link, showDateFilter: A, league_id: p })) : ((F = o({ vongdau: "", showDateFilter: "-<br>-", league_id: p, league_link: !1 })), (T = !0));
                        var M = "",
                            U = !1;
                        I
                            ? (M = l({ vongdau: h, showDateFilter: L, league_id: p, league_link: Common.settings.leagues_list[p].link, max_index: t.dataEffect.league_date[p].kq.length - 1 }))
                            : ((M = l({ vongdau: "", showDateFilter: "-<br>-", league_id: p, league_link: !1 })), (U = !0)),
                            (r = F + M),
                            (r += s({ league_id: c.league_detail.id })),
                            m.push(c.league_detail.id);
                        var O = { code: c.league_detail.code, css_id: c.league_detail.css_id, logo: u + c.league_detail.logo, name: c.league_detail.name, link: c.league_detail.link, content: r };
                        a.append(n(O)),
                            $(".trankhac").click(function () {
                                $(this).closest(".vongdau").find("div.wvd").removeClass("hidden"), $(this).remove();
                            }),
                            void 0 !== t.dataEffect.league_date[p] &&
                                (t.dataEffect.league_date[p].ld.sort(i),
                                t.dataEffect.league_date[p].kq.sort(i),
                                t.home_filter_vongdau(p),
                                T &&
                                    $("#box-lichdau-" + p)
                                        .find(".select-date span")
                                        .addClass("disable"),
                                U &&
                                    $("#box-ketqua-" + p)
                                        .find(".select-date span")
                                        .addClass("disable"));
                    }
                }
                Common.data_bangdiem(m, function (e) {
                    if (e.code) {
                        var a = Handlebars.compile($("#template-bang-diem").html()),
                            i = Handlebars.compile($("#template-bang-diem-vl").html()),
                            n = Handlebars.compile($("#template-_scoreitem").html());
                        for (let m in e.data)
                            if (void 0 !== e.data[m].data && e.data[m].data.length > 0)
                                if (Common.settings.uefa_list.includes(parseInt(m))) {
                                    var l = [],
                                        o = -1;
                                    for (var d in e.data[m].data) {
                                        var s = e.data[m].data[d];
                                        o < 0 && (o = parseInt(s.group_id)),
                                            void 0 !== l[s.group_id] && l[s.group_id].data.length > 0
                                                ? l[s.group_id].data.push(s)
                                                : ((l[s.group_id] = []), (l[s.group_id].data = [s]), (l[s.group_id].vongbang = Common.getGroupFromString(s.group)));
                                    }
                                    var r = o + 1;
                                    (r = r >= l.length ? l.length : r),
                                        (t.dataEffect.standings[m] = { data: l, lid: m, vongbang: { group_next: r, group_prev: 0, group_id: o, total: l.length - 1 } }),
                                        $("#box_score_" + m)
                                            .html(
                                                i({
                                                    lid: m,
                                                    bangdiem: n({ data: l[o].data }),
                                                    league_link: Common.settings.leagues_list[m].link,
                                                    vongbang: { name: l[o].vongbang, group_next: r, group_prev: 0, group_id: o, total: l.length },
                                                })
                                            )
                                            .removeClass("box-placeholder")
                                            .addClass("bangdiem");
                                } else {
                                    var u = e.data[m].data.slice(0, 5);
                                    $("#box_score_" + m).replaceWith(a({ bangdiem: n({ data: u }), league_link: Common.settings.leagues_list[m].link }));
                                }
                            else $("#box_score_" + m).replaceWith(a({ bangdiem: "zz", league_link: !1 })), $("#box_score_" + m + " table").remove(), $("#box_score_" + m + " .btnreadmore").remove();
                    } else {
                        a = Handlebars.compile($("#template-bang-diem").html());
                        $('[id^="box_score_"]').replaceWith(a({ bangdiem: "", league_link: !1 })), $(".bangdiem table").remove(), $(".bangdiem .btnreadmore").remove();
                    }
                });
            }
        });
    },
    func_filter_bd: function (e, a) {
        var t = this.dataEffect.standings[e],
            i = Handlebars.compile($("#template-bang-diem-vl").html()),
            n = Handlebars.compile($("#template-_scoreitem").html()),
            l = t.data[a],
            o = a + 1;
        o = o >= t.vongbang.total ? t.vongbang.total : o;
        var d = a - 1;
        (d = d >= 0 ? d : 0), (this.dataEffect.standings[e].vongbang = { name: l.vongbang, group_next: o, group_prev: d, group_id: a, total: t.vongbang.total });
        var s = i({ lid: t.lid, league_link: Common.settings.leagues_list[t.lid].link, bangdiem: n({ data: l.data }), vongbang: { name: l.vongbang, group_next: o, group_prev: d, group_id: a, total: t.vongbang.total } });
        $("#box_score_" + t.lid).html(s),
            a == o &&
                $("#box_score_" + t.lid)
                    .find(".next.goto-vongbang")
                    .removeClass("goto-vongbang"),
            (a == d || d < 0) &&
                $("#box_score_" + t.lid)
                    .find(".prev.goto-vongbang")
                    .removeClass("goto-vongbang");
    },
    home_filter_vongdau: function (e) {
        var a = this;
        function t(e, t) {
            var i,
                n = $(e).closest(".select-date"),
                l = n.data("leagueid"),
                o = n.data("type"),
                d = $(e).data("action"),
                s = "ketqua" == o ? a.dataEffect.league_ketqua[l] : a.dataEffect.league_lichdau[l],
                r = t.find("span.date").data("index"),
                u = a.dataEffect.league_date[l];
            "ketqua" == o ? (u = void 0 !== u.kq ? u.kq : []) : "lichdau" == o && (u = void 0 !== u.ld ? u.ld : []);
            var m = [];
            (i = "next" == d ? parseInt(r) + 1 : parseInt(r) - 1) > -1 && void 0 !== u[i] && (t.find("span.date").data("index", i), (m = s[u[i].format])),
                i > 0 && void 0 === u[i + 1] ? n.find(".choose-date.right .next").addClass("disable") : n.find(".choose-date.right .next").removeClass("disable"),
                i <= 0 ? n.find(".choose-date.left .prev").addClass("disable") : n.find(".choose-date.left .prev").removeClass("disable");
            var _ = "",
                c = Handlebars.compile($("#template-_vongdau").html()),
                g = 0;
            for (var h in m.data)
                m.data.length > 6
                    ? (g < 5 ||
                          ((item_hide = m.data.length - 5),
                          5 == g && (_ += '<div class="doidau lichdau flexbox trankhac"><div class="text-trankhac"><span>...</span><span>' + item_hide + " trận khác cùng ngày</span></div></div>"),
                          (m.data[h].hidden = !0)),
                      (_ += c(m.data[h])),
                      g++)
                    : (_ += c(m.data[h]));
            "" != _ &&
                (t.find("span.date").html(m.showDateFilter),
                n.closest(".block").find(".vongdau").html(_),
                $(".text-trankhac").closest(".trankhac").css("cursor", "pointer"),
                $(".trankhac").click(function () {
                    $(this).closest(".vongdau").find("div.wvd").removeClass("hidden"), $(this).remove();
                }));
        }
        $("#box-ketqua-" + e + " .choose-date").click(function () {
            t(this, $("#box-ketqua-" + e));
        }),
            $("#box-lichdau-" + e + " .choose-date").click(function () {
                t(this, $("#box-lichdau-" + e));
            }),
            $("#box-ketqua-" + e + " .choose-date.left").trigger("click"),
            $("#box-ketqua-" + e + " .choose-date.right").trigger("click"),
            $("#box-lichdau-" + e + " .choose-date.right").trigger("click"),
            $("#box-lichdau-" + e + " .choose-date.left").trigger("click");
    },
    detail: function () {
        var e = this,
            a = Common.getLeagueDetailBySlug($("#detail-leagues").data("leaguekey")),
            t = css_url_vne + "/dulieubongda/pc/images/graphics/";
        a.logo = t + a.logo;
        var i = Handlebars.compile($("#init-html").html());
        function n(e, a) {
            return e.time < a.time ? -1 : e.time > a.time ? 1 : 0;
        }
        $("#detail-leagues").html(i(a));
        var l = $("#detail-leagues").data("tabactive");
        if (($("body").removeClass("page-lichdau"), ("lich-thi-dau" != l && "ket-qua" != l && "bang-diem" != l) || $("body").addClass("page-lichdau"), "ket-qua" == l)) {
            var o = [],
                d = [],
                s = Handlebars.compile($("#template-ketqua-full").html()),
                r = Handlebars.compile($("#template-view-ketqua").html());
            Common.lich_dau([a.id], !1, function (a) {
                if (a.code && a.data.length > 0)
                    for (var t in a.data) {
                        var i = a.data[t];
                        if (i && i.league_detail) {
                            var n = i.league_detail.id;
                            e.dataEffect.league_ketqua_original = i.ket_qua;
                            var l = 0,
                                u = [];
                            for (var m in (i.ket_qua.sort(function (e, a) {
                                return e.event_timestamp >= a.event_timestamp ? -1 : 1;
                            }),
                            i.ket_qua)) {
                                var _ = !0;
                                if (
                                    ((void 0 === i.ket_qua[m].round_int || i.ket_qua[m].round_int < 1) &&
                                        (void 0 === Common.settings.mappingRound[i.ket_qua[m].round] ? (delete i.ket_qua[m], (_ = !1)) : (i.ket_qua[m].round_int = Common.settings.mappingRound[i.ket_qua[m].round])),
                                    1 == _)
                                )
                                    if (i.ket_qua[m].elapsed < 90 || (i.ket_qua[m].elapsed >= 90 && "Match Finished" != i.ket_qua[m].status)) delete i.ket_qua[m];
                                    else {
                                        void 0 !== i.ket_qua[m].goals_home_team && void 0 !== i.ket_qua[m].goals_away_team && (i.ket_qua[m].score.fulltime = i.ket_qua[m].goals_home_team + "-" + i.ket_qua[m].goals_away_team);
                                        var c = (v = Common.convertUTCDateToLocalDate(new Date(i.ket_qua[m].event_date))).getDate() + "/" + parseInt(v.getMonth() + 1) + "/" + v.getFullYear(),
                                            g = !1;
                                        (void 0 === u[c] || u[c].data.length <= 0) &&
                                            ((g = !0),
                                            (u[c] = []),
                                            (u[c].data = []),
                                            (u[c].time = i.ket_qua[m].event_date),
                                            (u[c].showDateFilter = Common.dayOfWeek[v.getDay()] + " " + c),
                                            (e.dataEffect.league_date[n] && e.dataEffect.league_date[n].kq) || e.dataEffect.league_date[n] || (e.dataEffect.league_date[n] = { kq: [], ld: [] }),
                                            e.dataEffect.league_date[n].kq.push({ format: c, time: v.getTime() })),
                                            (i.ket_qua[m].head_vl = !1),
                                            (l != i.ket_qua[m].round_int || g) &&
                                                ((i.ket_qua[m].head_vl = !0),
                                                (l = i.ket_qua[m].round_int),
                                                (n != CHAMPION_LEAGUE && n != EUROPA_LEAGUE) || (8 != l && 16 != l) || ((i.ket_qua[m].round_int = "1/" + l), (l = i.ket_qua[m].round_int))),
                                            (void 0 !== i.ket_qua[m].score && void 0 !== i.ket_qua[m].score.halftime) || (i.ket_qua[m].score = { halftime: "0-0", fulltime: "0-0" }),
                                            u[c].data.push(i.ket_qua[m]);
                                    }
                            }
                            var h = 0;
                            for (var p in u)
                                if (void 0 !== u[p].data) {
                                    for (var m in ((h = 0),
                                    u[p].data.sort(function (e, a) {
                                        return e.event_timestamp >= a.event_timestamp ? -1 : 1;
                                    }),
                                    u[p].data)) {
                                        var v,
                                            f = (v = Common.convertUTCDateToLocalDate(new Date(u[p].data[m].event_date))).getHours() < 10 ? "0" + v.getHours() : v.getHours(),
                                            b = v.getMinutes() < 10 ? "0" + v.getMinutes() : v.getMinutes();
                                        (u[p].data[m].event_date_show = f + ":" + b), (u[p].data[m].head_vl = !1), h != u[p].data[m].round_int && ((u[p].data[m].head_vl = !0), (h = u[p].data[m].round_int));
                                        var k = u[p].data[m].away_team,
                                            C = u[p].data[m].home_team;
                                        (d[C.team_id] = C), (d[k.team_id] = k), (u[p].data[m].score.halftime = u[p].data[m].score.halftime.replace("-", " - "));
                                    }
                                    o.push({ showDateFilter: u[p].showDateFilter, data: u[p].data, time: new Date(u[p].time) });
                                }
                            o.sort(function (e, a) {
                                return e.time > a.time ? -1 : e.time < a.time ? 1 : 0;
                            });
                            var w,
                                y = r({ dataItem: o });
                            for (var E in ($("#container-ketqua")
                                .html(s({ view_ketqua_html: y }))
                                .removeClass("box-placeholder"),
                            e.eventDetailFixture(),
                            d.sort(function (e, a) {
                                return e.team_name < a.team_name ? -1 : e.team_name > a.team_name ? 1 : 0;
                            }),
                            d))
                                (w = `<a href="javascript:;" data-teamid="${d[E].team_id}" class="filter-team-kq"><img src="${d[E].logo}" alt="${d[E].team_name}"><span class="name">${d[E].team_name}</span></a>`),
                                    $("#filter-team-kq .inner-scroll").append(w);
                            e.filterGiaidau(), e.filterKetqua();
                        }
                    }
            });
        } else if ("lich-thi-dau" == l) {
            var u = Handlebars.compile($("#template-_vongdau").html()),
                m = Handlebars.compile($("#template-lich-dau-full").html()),
                _ = Handlebars.compile($("#template-view-lichdau").html()),
                c = [];
            d = [];
            Common.lich_dau([a.id], !1, function (a) {
                if (a.code && a.data.length > 0)
                    for (var t in a.data) {
                        var i = a.data[t];
                        if (i && i.league_detail) {
                            var l = i.league_detail.id;
                            e.dataEffect.league_lichdau_original = i.lich_dau;
                            var o = 0,
                                s = [];
                            for (var r in (i.lich_dau.sort(function (e, a) {
                                return e.event_timestamp < a.event_timestamp ? -1 : 1;
                            }),
                            i.lich_dau)) {
                                var g = Common.convertUTCDateToLocalDate(new Date(i.lich_dau[r].event_date)),
                                    h = g.getHours() < 10 ? "0" + g.getHours() : g.getHours(),
                                    p = g.getMinutes() < 10 ? "0" + g.getMinutes() : g.getMinutes();
                                (i.lich_dau[r].event_date_show = h + ":" + p), (i.lich_dau[r].round_int && 0 != i.lich_dau[r].round_int) || (i.lich_dau[r].round_int = Common.settings.mappingRound[i.lich_dau[r].round]);
                                var v = g.getDate() + "/" + parseInt(g.getMonth() + 1) + "/" + g.getFullYear(),
                                    f = !1;
                                (void 0 === s[v] || s[v].data.length <= 0) &&
                                    ((f = !0),
                                    (s[v] = []),
                                    (s[v].data = []),
                                    (s[v].time = i.lich_dau[r].event_date),
                                    (s[v].showDateFilter = Common.dayOfWeek[g.getDay()] + " " + v),
                                    (e.dataEffect.league_date[l] && e.dataEffect.league_date[l].ld) || e.dataEffect.league_date[l] || (e.dataEffect.league_date[l] = { kq: [], ld: [] }),
                                    e.dataEffect.league_date[l].ld.push({ format: v, time: g.getTime() })),
                                    (i.lich_dau[r].head_vl = !1),
                                    (o != i.lich_dau[r].round_int || f) &&
                                        ((i.lich_dau[r].head_vl = !0),
                                        (o = i.lich_dau[r].round_int),
                                        (l != CHAMPION_LEAGUE && l != EUROPA_LEAGUE) || (8 != o && 16 != o) || ((i.lich_dau[r].round_int = "1/" + o), (o = i.lich_dau[r].round_int))),
                                    s[v].data.push(i.lich_dau[r]);
                            }
                            s.sort(n);
                            var b = s;
                            for (var k in ((b = Object.values(b)).sort(function (e, a) {
                                return new Date(e.time) - new Date(a.time);
                            }),
                            b))
                                if (void 0 !== b[k].data) {
                                    var C = "";
                                    for (var r in b[k].data) {
                                        C += u(b[k].data[r]);
                                        var w = b[k].data[r].away_team,
                                            y = b[k].data[r].home_team;
                                        (d[y.team_id] = y), (d[w.team_id] = w);
                                    }
                                    c.push({ showDateFilter: b[k].showDateFilter, vongdau: C });
                                }
                            for (var E in ($("#container-lichdau")
                                .html(m({ lichdau_html: _({ dataItem: c }) }))
                                .removeClass("box-placeholder"),
                            d.sort(function (e, a) {
                                return e.team_name < a.team_name ? -1 : e.team_name > a.team_name ? 1 : 0;
                            }),
                            d))
                                (C = `<a href="javascript:;" data-teamid="${d[E].team_id}" class="filter-team"><img src="${d[E].logo}" alt="${d[E].team_name}"><span class="name">${d[E].team_name}</span></a>`),
                                    $("#filter-teams .inner-scroll").append(C);
                            e.filterGiaidau(), e.filterKetqua();
                        }
                    }
            });
        } else
            "bang-diem" == l
                ? Common.data_bangdiem([a.id], function (t) {
                      if (t.code) {
                          Handlebars.compile($("#template-_scoreitem").html());
                          function i(e, a) {
                              return e.points > a.points ? -1 : e.points < a.points ? 1 : 0;
                          }
                          var n = [];
                          for (let E in t.data)
                              if (void 0 !== t.data[E].data && t.data[E].data.length > 0) {
                                  var l = [],
                                      o = [];
                                  if (((n = Common.settings.leagues_list[E]), Common.settings.uefa_list.includes(parseInt(E)))) {
                                      for (var d in t.data[E].data) {
                                          var s = t.data[E].data[d];
                                          void 0 !== n.config_standing[s.rank] ? (s.class_rank = n.config_standing[s.rank]) : (s.class_rank = ""),
                                              void 0 !== o[s.group_id] && o[s.group_id].data.length > 0
                                                  ? o[s.group_id].data.push(s)
                                                  : ((o[s.group_id] = []), (o[s.group_id].data = [s]), (o[s.group_id].vongbang = Common.getGroupFromString(s.group)));
                                      }
                                      e.dataEffect.league_bangdiem = { data: o, show_rothang: !1 };
                                  } else {
                                      var r = t.data[E].data,
                                          u = [],
                                          m = 0,
                                          _ = [],
                                          c = [];
                                      r.sort(i);
                                      var g = r.length,
                                          h = Math.ceil(g / 2);
                                      for (var p in r) void 0 !== n.config_standing[r[p].rank] ? (r[p].class_rank = n.config_standing[r[p].rank]) : (r[p].class_rank = ""), ++m <= h ? _.push(r[p]) : c.push(r[p]), u.push(r[p]);
                                      e.dataEffect.league_bangdiem = { data: u, show_rothang: !0 };
                                  }
                              }
                          var v = $("#container-bangdiem");
                          if (e.dataEffect.league_bangdiem.show_rothang) {
                              for (var d in e.dataEffect.league_bangdiem)
                                  for (var p in e.dataEffect.league_bangdiem[d]) {
                                      var f = "";
                                      if (void 0 !== e.dataEffect.league_bangdiem[d][p].forme) {
                                          var b = e.dataEffect.league_bangdiem[d][p].forme.split("");
                                          for (var k in b) f += '<span class="item-pd ' + Common.stylePhongDo.style[b[k]] + '">' + Common.stylePhongDo.vn[b[k]] + "</span> ";
                                      }
                                      e.dataEffect.league_bangdiem[d][p].contentPD = f;
                                  }
                              var C = Handlebars.compile($("#template-bang-diem-full").html());
                              v.replaceWith(C({ league_id: a.id, bangdiem: [{ data: e.dataEffect.league_bangdiem.data, title_table: "Thứ hạng" }], show_rothang: e.dataEffect.league_bangdiem.show_rothang })).removeClass(
                                  "box-placeholder"
                              );
                          } else {
                              l = [];
                              var w = e.dataEffect.league_bangdiem.data;
                              for (var d in w) {
                                  var y = w[d].data;
                                  for (var p in y) {
                                      f = "";
                                      if (void 0 !== y[p].forme) {
                                          b = y[p].forme.split("");
                                          for (var k in b) f += '<span class="item-pd ' + Common.stylePhongDo.style[b[k]] + '">' + Common.stylePhongDo.vn[b[k]] + "</span> ";
                                      }
                                      y[p].contentPD = f;
                                  }
                                  l.push({ data: y, title_table: "Bảng " + w[d].vongbang, type: "multi_table" });
                              }
                              C = Handlebars.compile($("#template-bang-diem-full").html());
                              v.replaceWith(C({ bangdiem: l, league_id: a.id, show_rothang: e.dataEffect.league_bangdiem.show_rothang })).removeClass("box-placeholder");
                          }
                      } else $("#block-bangdiem").remove();
                  })
                : (Common.data_live([a.id], function (e) {
                      if (e.code) {
                          var a = Handlebars.compile($("#template-truc-tiep").html()),
                              t = Common.settings.leagues_list,
                              i = css_url_vne + "/dulieubongda/pc/images/graphics/";
                          for (var n in t) {
                              var l = t[n].id;
                              if (e.data[l] && void 0 !== e.data[l].data) {
                                  var o = 0;
                                  for (var d in e.data[l].data) {
                                      var s = e.data[l].data[d];
                                      if (
                                          ((s.head_vl = !1),
                                          o != s.round_int && ((s.head_vl = !0), (o = s.round_int), (l != CHAMPION_LEAGUE && l != EUROPA_LEAGUE) || (8 != o && 16 != o) || (s.round_int = "1/" + o)),
                                          void 0 !== s.events)
                                      ) {
                                          var r = Common.mappingEvent(s.events, s.elapsed);
                                          (s.event_home = r[s.home_team.team_id]), (s.event_away = r[s.away_team.team_id]), (s.percent_map = r.percent_map);
                                      }
                                      (void 0 === s.percent_map || s.percent_map <= 0) && (s.percent_map = s.elapsed > 90 ? (100 / s.elapsed) * s.elapsed : (100 / 90) * s.elapsed), (e.data[l].data[d] = s);
                                  }
                                  (e.data[l].detail = t[n]), (e.data[l].detail.logo = i + t[n].logo);
                              } else delete e.data[l];
                          }
                          var u = "";
                          Object.size(e.data) > 0
                              ? ((u = a(e)),
                                $("#wrap-ttlive").removeClass("box-placeholder"),
                                $("#truc-tiep").replaceWith(u),
                                $(".btn-timeline").click(function () {
                                    $(this).parent().toggleClass("open");
                                }),
                                $("#wrap-ttlive").find(".header-block").html(""))
                              : $("#wrap-ttlive").remove("");
                      } else $("#wrap-ttlive").remove("");
                  }),
                  Common.lich_dau([a.id], !1, function (a) {
                      var t = Handlebars.compile($("#template-ket-qua").html()),
                          i = Handlebars.compile($("#template-lich-dau").html()),
                          l = Handlebars.compile($("#template-_vongdau").html());
                      if (a.code) {
                          var o = "",
                              d = (css_url_vne, []);
                          if (a.data.length > 0)
                              for (var s in a.data) {
                                  var r = a.data[s],
                                      u = "",
                                      m = "",
                                      _ = r.league_detail.id;
                                  e.dataEffect.league_ketqua_original = r.ket_qua;
                                  var c = 0;
                                  void 0 === e.dataEffect.league_lichdau[_] && (e.dataEffect.league_lichdau[_] = []);
                                  var g = e.dataEffect.league_lichdau[_];
                                  for (var h in (r.lich_dau.sort(function (e, a) {
                                      return e.event_timestamp < a.event_timestamp ? -1 : 1;
                                  }),
                                  r.lich_dau)) {
                                      var p = (k = Common.convertUTCDateToLocalDate(new Date(r.lich_dau[h].event_date))).getHours() < 10 ? "0" + k.getHours() : k.getHours(),
                                          v = k.getMinutes() < 10 ? "0" + k.getMinutes() : k.getMinutes();
                                      (r.lich_dau[h].event_date_show = p + ":" + v), (r.lich_dau[h].round_int && 0 != r.lich_dau[h].round_int) || (r.lich_dau[h].round_int = Common.settings.mappingRound[r.lich_dau[h].round]);
                                      var f = !1;
                                      (void 0 === g[(C = k.getDate() + "/" + parseInt(k.getMonth() + 1) + "/" + k.getFullYear())] || g[C].data.length <= 0) &&
                                          ((f = !0),
                                          (g[C] = []),
                                          (g[C].data = []),
                                          (g[C].time = r.lich_dau[h].event_date),
                                          (g[C].showDateFilter = "<strong>" + Common.dayOfWeek[k.getDay()] + "</strong> " + C),
                                          (e.dataEffect.league_date[_] && e.dataEffect.league_date[_].ld) || e.dataEffect.league_date[_] || (e.dataEffect.league_date[_] = { kq: [], ld: [] }),
                                          e.dataEffect.league_date[_].ld.push({ format: C, time: k.getTime() })),
                                          (r.lich_dau[h].head_vl = !1),
                                          (c != r.lich_dau[h].round_int || f) &&
                                              ((r.lich_dau[h].head_vl = !0), (c = r.lich_dau[h].round_int), (_ != CHAMPION_LEAGUE && _ != EUROPA_LEAGUE) || (8 != c && 16 != c) || (r.lich_dau[h].round_int = "1/" + c)),
                                          g[C].data.push(r.lich_dau[h]);
                                  }
                                  g.sort(n), (e.dataEffect.league_lichdau[_] = g), (e.dataEffect.league_lichdau_original = r.lich_dau), (c = 0), void 0 === e.dataEffect.league_ketqua[_] && (e.dataEffect.league_ketqua[_] = []);
                                  var b = e.dataEffect.league_ketqua[_];
                                  for (var h in (r.ket_qua.sort(function (e, a) {
                                      return e.event_timestamp >= a.event_timestamp ? -1 : 1;
                                  }),
                                  r.ket_qua))
                                      if (r.ket_qua[h].elapsed < 90 || (r.ket_qua[h].elapsed >= 90 && "Match Finished" != r.ket_qua[h].status)) delete r.ket_qua[h];
                                      else {
                                          void 0 !== r.ket_qua[h].goals_home_team && void 0 !== r.ket_qua[h].goals_away_team && (r.ket_qua[h].score.fulltime = r.ket_qua[h].goals_home_team + "-" + r.ket_qua[h].goals_away_team),
                                              (r.ket_qua[h].round_int && 0 != r.ket_qua[h].round_int) || (r.ket_qua[h].round_int = Common.settings.mappingRound[r.ket_qua[h].round]);
                                          var k;
                                          (p = (k = Common.convertUTCDateToLocalDate(new Date(r.ket_qua[h].event_date))).getHours() < 10 ? "0" + k.getHours() : k.getHours()),
                                              (v = k.getMinutes() < 10 ? "0" + k.getMinutes() : k.getMinutes());
                                          (r.ket_qua[h].event_date_show = p + ":" + v), (r.ket_qua[h].kq_home = !0);
                                          var C;
                                          f = !1;
                                          (void 0 === b[(C = k.getDate() + "/" + parseInt(k.getMonth() + 1) + "/" + k.getFullYear())] || b[C].data.length <= 0) &&
                                              ((f = !0),
                                              (b[C] = []),
                                              (b[C].data = []),
                                              (b[C].time = r.ket_qua[h].event_date),
                                              (b[C].showDateFilter = "<strong>" + Common.dayOfWeek[k.getDay()] + "</strong> " + C),
                                              (e.dataEffect.league_date[_] && e.dataEffect.league_date[_].kq) || e.dataEffect.league_date[_] || (e.dataEffect.league_date[_] = { kq: [], ld: [] }),
                                              e.dataEffect.league_date[_].kq.push({ format: C, time: k.getTime() })),
                                              (r.ket_qua[h].head_vl = !1),
                                              (c != r.ket_qua[h].round_int || f) &&
                                                  ((r.ket_qua[h].head_vl = !0), (c = r.ket_qua[h].round_int), (_ != CHAMPION_LEAGUE && _ != EUROPA_LEAGUE) || (8 != c && 16 != c) || (r.ket_qua[h].round_int = "1/" + c)),
                                              (void 0 !== r.ket_qua[h].score && void 0 !== r.ket_qua[h].score.halftime) || (r.ket_qua[h].score = { halftime: "0-0", fulltime: "0-0" }),
                                              b[C].data.push(r.ket_qua[h]);
                                      }
                                  e.dataEffect.league_ketqua[_] = b;
                                  var w = Object.keys(e.dataEffect.league_lichdau[_])[0],
                                      y = e.dataEffect.league_lichdau[_][w],
                                      E = y && void 0 !== y.showDateFilter ? y.showDateFilter : "";
                                  if (void 0 !== y) for (var h in y.data) u += l(y.data[h]);
                                  w = Object.keys(e.dataEffect.league_ketqua[_])[Object.keys(e.dataEffect.league_ketqua[_]).length - 1];
                                  var q = e.dataEffect.league_ketqua[_][w],
                                      D = q ? q.showDateFilter : "";
                                  if (void 0 !== q) for (var h in q.data) m += l(q.data[h]);
                                  var x = "";
                                  y ? (x = i({ vongdau: u, showDateFilter: E, league_id: _, league_link: Common.settings.leagues_list[_].link })) : $('a[data-tab="container-lichdau"]').remove();
                                  var H = "";
                                  q
                                      ? (H = t({ vongdau: m, showDateFilter: D, league_id: _, max_index: e.dataEffect.league_date[_].kq.length - 1, league_link: Common.settings.leagues_list[_].link }))
                                      : $('a[data-tab="container-ketqua"]').remove(),
                                      (o = r.type_show % 2 == 0 ? x + H : H + x),
                                      d.push(r.league_detail.id),
                                      $("#lichdau-ketqua").html(o).removeClass("box-placeholder"),
                                      $(".btnreadmore").click(function () {
                                          var e = $(this).data("tab");
                                          $('li a[data-tab="' + e + '"]').trigger("click");
                                      }),
                                      e.dataEffect.league_date[_].ld.sort(n),
                                      e.dataEffect.league_date[_].kq.sort(n),
                                      (e.dataEffect.leagueid = _),
                                      e.home_filter_vongdau(_);
                              }
                          else $("#lichdau-ketqua").remove(), $('a[data-tab="container-lichdau"]').remove(), $('a[data-tab="container-ketqua"]').remove();
                      } else $("#lichdau-ketqua").remove(), $('a[data-tab="container-lichdau"]').remove(), $('a[data-tab="container-ketqua"]').remove();
                  }),
                  Common.data_bangdiem([a.id], function (t) {
                      if (t.code) {
                          var i = Handlebars.compile($("#template-bang-diem-2col").html()),
                              n = Handlebars.compile($("#template-_scoreitem").html());
                          function l(e, a) {
                              return e.points > a.points ? -1 : e.points < a.points ? 1 : 0;
                          }
                          for (let b in t.data)
                              if (void 0 !== t.data[b].data && t.data[b].data.length > 0) {
                                  var o = [],
                                      d = [],
                                      s = Common.settings.leagues_list[b];
                                  if (Common.settings.uefa_list.includes(parseInt(b))) {
                                      for (var r in t.data[b].data) {
                                          var u = t.data[b].data[r];
                                          void 0 !== s.config_standing[u.rank] ? (u.class_rank = s.config_standing[u.rank]) : (u.class_rank = ""),
                                              void 0 !== d[u.group_id] && d[u.group_id].data.length > 0
                                                  ? d[u.group_id].data.push(u)
                                                  : ((d[u.group_id] = []), (d[u.group_id].data = [u]), (d[u.group_id].vongbang = Common.getGroupFromString(u.group)));
                                      }
                                      o = [];
                                      for (var m in d) o.push({ title_table: "Bảng " + d[m].vongbang, content_table: n({ data: d[m].data }) });
                                      $("#block-bangdiem")
                                          .replaceWith(i({ show_rothang: !1, league_id: a.id, bangdiem: o, league_link: Common.settings.leagues_list[a.id].link }))
                                          .removeClass("box-placeholder"),
                                          (e.dataEffect.league_bangdiem = { data: d, show_rothang: !1 });
                                  } else {
                                      var _ = t.data[b].data,
                                          c = [],
                                          g = 0,
                                          h = [],
                                          p = [];
                                      _.sort(l);
                                      var v = _.length,
                                          f = Math.ceil(v / 2);
                                      for (var m in _) void 0 !== s.config_standing[_[m].rank] ? (_[m].class_rank = s.config_standing[_[m].rank]) : (_[m].class_rank = ""), ++g <= f ? h.push(_[m]) : p.push(_[m]), c.push(_[m]);
                                      (e.dataEffect.league_bangdiem = { data: c, show_rothang: !0 }),
                                          o.push({ title_table: "Thứ hạng 1 - " + f, content_table: n({ data: h }) }),
                                          o.push({ title_table: "Thứ hạng " + (f + 1) + " - " + v, content_table: n({ data: p }) }),
                                          $("#block-bangdiem")
                                              .replaceWith(i({ show_rothang: !0, league_id: a.id, bangdiem: o, league_link: Common.settings.leagues_list[a.id].link }))
                                              .removeClass("box-placeholder"),
                                          $(".btnreadmore").click(function () {
                                              var e = $(this).data("tab");
                                              $('li a[data-tab="' + e + '"]').trigger("click");
                                          });
                                  }
                              }
                      } else $("#block-bangdiem").remove();
                  }),
                  Common.topscorers([a.id], function (e) {
                      if (e.code)
                          for (var a in e.data) {
                              var t = e.data[a];
                              if (void 0 !== t.data) {
                                  var i = Handlebars.compile($("#template-topscorers").html());
                                  function n(e, a) {
                                      return (
                                          (e.goals.total = void 0 !== e.goals.total ? e.goals.total : 0),
                                          (a.goals.total = void 0 !== a.goals.total ? a.goals.total : 0),
                                          e.goals.total > a.goals.total ? -1 : e.goals.total < a.goals.total ? 1 : 0
                                      );
                                  }
                                  t.data.sort(n);
                                  var l = t.data.slice(0, 10);
                                  $("#block-topscorers")
                                      .html(i({ data: l }))
                                      .removeClass("box-placeholder"),
                                      $(".btnreadmore").click(function () {
                                          var e = $(this).data("tab");
                                          $('li a[data-tab="' + e + '"]').trigger("click");
                                      });
                              } else $("#block-topscorers").remove();
                          }
                      else $("#block-topscorers").remove();
                  }),
                  Common.get_list_news(a, function (t) {
                      try {
                          googTagCode.display.push("sis_breakpage1");
                      } catch (e) {}
                      t.code && void 0 !== t.data && t.data.length > 0 ? e.parseNews(t.data, a) : $("#block-news").remove();
                  }));
    },
    parseNews: function (e, a) {
        var t = Handlebars.compile($("#template-news").html()),
            i = new Date().getTime() / 1e3,
            n = 0;
        for (var l in e) (n = i - e[l].publish_time) < 72e3 && (e[l].time_show = n < 3600 ? Math.round(n % 60) + "' trước" : Math.round(n / 3600) + "h trước"), (e[l].comment = Common.renderComment(e[l]));
        var o = e.slice(0, 3),
            d = e.slice(3, 7);
        $("#block-news")
            .html(t({ data1: o, data2: d, link_news: a.link_news }))
            .removeClass("box-placeholder"),
            Common.importScript(js_url_vne + "/v3/pc/usi.js", function () {
                CmtWidget.mix();
            });
    },
    eventDetailFixture: function (e) {
        (e = e || "#filter-ngay-kq"),
            $(e + " .view-event-fixture").click(function () {
                $(this).data("time");
                var a = $(this).data(),
                    t = $(this).data("hometeamid"),
                    i = $(this).data("awayteamid");
                $(e + " .timeline-" + a.fixture_id).hasClass("dataloaded") ||
                    Common.getEventFixture([a.fixture_id], function (e) {
                        if (e.code) {
                            var n = e.data[a.fixture_id].data,
                                l = Handlebars.compile($("#template-timeline-event").html()),
                                o = {},
                                d = Common.mappingEvent(n, a.time);
                            (o.event_timeline = d.event_timeline),
                                (o.home_team = { logo: a.homelogo, team_name: a.homename, team_id: a.hometeamid }),
                                (o.away_team = { logo: a.awaylogo, team_name: a.awayname, team_id: a.awayteamid }),
                                (o.event_home = d[t]),
                                (o.event_away = d[i]),
                                (o.percent_map = d.percent_map);
                            for (var s in n) if (void 0 !== n[s].elapsed_plus && n[s].elapsed_plus > 0 && 90 == n[s].elapsed) break;
                            o.event_home.push({ detail: !1, is_elapsed_plus: !1, elapsed: a.time, percent: 100 }),
                                $(".timeline-" + a.fixture_id)
                                    .html(l(o))
                                    .addClass("dataloaded");
                        }
                    }),
                    $(this).parent().toggleClass("open");
            });
    },
    filterGiaidau: function () {
        var e = this;
        $("body").click(function (e) {
            $(e.target).closest(".select-op-kq").length || $("details.select-op-kq").removeAttr("open");
        }),
            $(".filter-ngay-vong a").click(function () {
                var e = $(this).data("view");
                if (($(".filter-ngay-vong a").removeClass("active"), $(this).addClass("active"), $(this).closest("details").find("summary span").text($(this).text()), $("details.select-op-kq").removeAttr("open"), "ngay" == e)) {
                    $("#filter-ngay").css("display", "block"), $("#filter-vongdau").css("display", "none");
                    var i = $("#filter-teams .filter-team.active").data("teamid");
                    $(".teamid-" + i).removeClass("hidden"),
                        $(".teamid-" + i)
                            .closest(".wrap-block-giaidau")
                            .removeClass("hidden");
                } else if (($("#filter-ngay").css("display", "none"), $("#filter-vongdau").css("display", "block"), !$("#filter-vongdau").hasClass("data_loaded"))) {
                    var n = $("#filter-teams .filter-team.active");
                    t(), $("#filter-vongdau").addClass("data_loaded"), a(n);
                }
            });
        var a = function (e) {
            $(".filter-team").removeClass("active"),
                $(e).addClass("active"),
                $(e).find("img").length > 0
                    ? $(e)
                          .closest("details")
                          .find("summary span")
                          .html($(e).find("img")[0].outerHTML + $(e).text())
                          .addClass("flexbox")
                    : $(e).closest("details").find("summary span").text($(e).text()),
                $("details.select-op-kq").removeAttr("open");
            var a = $(e).data("teamid");
            "all" == a
                ? ($(".block-filter .wrap-block-giaidau").removeClass("hidden"), $(".block-filter .wvd").removeClass("hidden"))
                : ($(".block-filter .wvd").addClass("hidden"), $(".block-filter .wvd.teamid-" + a).removeClass("hidden")),
                $(".block-filter .wrap-block-giaidau").each(function (e, a) {
                    if ($(a).find(".wvd.hidden").length == $(a).find(".wvd").length) $(a).addClass("hidden");
                    else for (var t = $(a).find(".wvd"), i = !1, n = $(a).find(".wvd").length - 1; n >= 0; n--) $(t[n]).hasClass("hidden") || (i = !0), $(t[n]).hasClass("text-vongdau") && (i && $(t[n]).removeClass("hidden"), (i = !1));
                }),
                $(".teamid-" + a).removeClass("hidden"),
                $(".teamid-" + a)
                    .closest(".wrap-block-giaidau")
                    .removeClass("hidden");
        };
        $(".filter-team").click(function () {
            a(this);
        });
        var t = function () {
            var a = Handlebars.compile($("#template-_vongdau").html()),
                t = Handlebars.compile($("#template-view-lichdau").html()),
                i = "",
                n = 0,
                l = [],
                o = e.dataEffect.leagueid,
                d = [];
            for (var s in e.dataEffect.league_lichdau_original) {
                void 0 === l[(c = e.dataEffect.league_lichdau_original[s]).round_int] && (l[c.round_int] = []);
                var r = (f = Common.convertUTCDateToLocalDate(new Date(c.event_date))).getHours() < 10 ? "0" + f.getHours() : f.getHours(),
                    u = f.getMinutes() < 10 ? "0" + f.getMinutes() : f.getMinutes();
                (c.event_date_show = r + ":" + u), (c.head_vl = !1), (c.dateFormat = f.getDate() + "/" + parseInt(f.getMonth() + 1) + "/" + f.getFullYear()), l[c.round_int].push(c);
            }
            var m = [];
            for (var _ in l) {
                var c = l[_];
                for (var g in (c.sort(function (e, a) {
                    return new Date(e.event_date) - new Date(a.event_date);
                }),
                c))
                    void 0 === m[_] && ((m[_] = []), (m[_].data = [])), void 0 === m[_].data[c[g].dateFormat] && (m[_].data[c[g].dateFormat] = []), m[_].data[c[g].dateFormat].push(c[g]);
                var h = "";
                for (var p in m[_].data)
                    for (var v in m[_].data[p]) {
                        if (((m[_].data[p][v].head_date = !1), i != m[_].data[p][v].dateFormat || n != _)) {
                            var f = Common.convertUTCDateToLocalDate(new Date(m[_].data[p][v].event_date));
                            (n = _), (m[_].data[p][v].head_date_str = Common.dayOfWeek[f.getDay()] + " " + m[_].data[p][v].dateFormat), (m[_].data[p][v].head_date = !0);
                            var b = m[_].data[p][v].round_int;
                            (o != CHAMPION_LEAGUE && o != EUROPA_LEAGUE) || (8 != b && 16 != b) || (b = "1/" + b), (m[_].showDateFilter = "Vòng " + b), (i = m[_].data[p][v].dateFormat);
                        }
                        h += a(m[_].data[p][v]);
                    }
                d.push({ showDateFilter: m[_].showDateFilter, vongdau: h });
            }
            $("#filter-vongdau").html(t({ dataItem: d })), $(".filter-team").trigger("click");
        };
        $("#filter-ngay .wrap-block-giaidau").each(function (e, a) {
            var t = $(a).find(".is-text-round");
            if (t.length) {
                var i = "";
                t.each(function (e, a) {
                    i == $(a).attr("data-round") && $(a).remove(), (i = $(a).attr("data-round"));
                });
            }
        });
    },
    filterKetqua: function () {
        var e = this;
        $(".filter-ngay-vong-kq a").click(function () {
            var e = $(this).data("view");
            if (($(".filter-ngay-vong-kq a").removeClass("active"), $(this).addClass("active"), $(this).closest("details").find("summary span").text($(this).text()), $("details.select-op-kq").removeAttr("open"), "ngay" == e)) {
                $("#filter-ngay-kq").css("display", "block"), $("#filter-vongdau-kq").css("display", "none");
                var t = $("#filter-team-kq .filter-team-kq.active").data("teamid");
                $(".teamid-" + t).removeClass("hidden"),
                    $(".teamid-" + t)
                        .closest(".wrap-block-giaidau")
                        .removeClass("hidden");
            } else if (($("#filter-ngay-kq").css("display", "none"), $("#filter-vongdau-kq").css("display", "block"), !$("#filter-vongdau-kq").hasClass("data_loaded"))) {
                var n = $("#filter-team-kq .filter-team-kq.active");
                i(), $("#filter-vongdau-kq").addClass("data_loaded"), a(n);
            }
        });
        var a = function (e) {
            $(".filter-team-kq").removeClass("active"),
                $(e).addClass("active"),
                $(e).find("img").length > 0
                    ? $(e)
                          .closest("details")
                          .find("summary span")
                          .html($(e).find("img")[0].outerHTML + $(e).text())
                          .addClass("flexbox")
                    : $(e).closest("details").find("summary span").text($(e).text()),
                $("details.select-op-kq").removeAttr("open");
            var a = $(e).data("teamid");
            "all" == a
                ? ($(".block-filter-kq .wrap-block-giaidau").removeClass("hidden"), $(".block-filter-kq .wvd").removeClass("hidden"))
                : ($(".block-filter-kq .wvd").addClass("hidden"), $(".block-filter-kq .wvd.teamid-" + a).removeClass("hidden")),
                $(".block-filter-kq .wrap-block-giaidau").each(function (e, a) {
                    if ($(a).find(".wvd.hidden").length == $(a).find(".wvd").length) $(a).addClass("hidden");
                    else for (var t = $(a).find(".wvd"), i = !1, n = $(a).find(".wvd").length - 1; n >= 0; n--) $(t[n]).hasClass("hidden") || (i = !0), $(t[n]).hasClass("text-vongdau") && (i && $(t[n]).removeClass("hidden"), (i = !1));
                }),
                $(".teamid-" + a).removeClass("hidden"),
                $(".teamid-" + a)
                    .closest(".wrap-block-giaidau")
                    .removeClass("hidden");
        };
        function t(e, a) {
            return e.event_timestamp > a.event_timestamp ? -1 : e.event_timestamp < a.event_timestamp ? 1 : 0;
        }
        $(".filter-team-kq").click(function () {
            a(this);
        });
        var i = function () {
            Handlebars.compile($("#template-_vongdau").html());
            var a = Handlebars.compile($("#template-view-ketqua").html()),
                i = "",
                n = [],
                l = e.dataEffect.leagueid,
                o = [];
            for (var d in e.dataEffect.league_ketqua_original) {
                var s = e.dataEffect.league_ketqua_original[d];
                (s.elapsed < 90 || (s.elapsed >= 90 && "Match Finished" != s.status)) && delete e.dataEffect.league_ketqua_original[d], void 0 === n[s.round_int] && ((n[s.round_int] = []), (n[s.round_int].data = []));
                var r = (g = Common.convertUTCDateToLocalDate(new Date(s.event_date))).getHours() < 10 ? "0" + g.getHours() : g.getHours(),
                    u = g.getMinutes() < 10 ? "0" + g.getMinutes() : g.getMinutes();
                (s.event_date_show = r + ":" + u),
                    (s.head_vl = !1),
                    (s.dateFormat = g.getDate() + "/" + parseInt(g.getMonth() + 1) + "/" + g.getFullYear()),
                    (s.head_date = !1),
                    0 != s.round_int &&
                        ((l != CHAMPION_LEAGUE && l != EUROPA_LEAGUE) || (8 != s.round_int && 16 != s.round_int) ? (n[s.round_int].showDateFilter = "Vòng " + s.round_int) : (n[s.round_int].showDateFilter = "Vòng 1/" + s.round_int),
                        (n[s.round_int].round = s.round_int)),
                    n[s.round_int].data.push(s);
            }
            for (var m in n)
                if (void 0 !== n[m].data) {
                    n[m].data.sort(t);
                    var _ = "";
                    for (var c in n[m].data) {
                        "" == _ && (_ = n[m].data[c].round);
                        var g;
                        (r = (g = Common.convertUTCDateToLocalDate(new Date(n[m].data[c].event_date))).getHours() < 10 ? "0" + g.getHours() : g.getHours()), (u = g.getMinutes() < 10 ? "0" + g.getMinutes() : g.getMinutes());
                        (n[m].data[c].event_date_show = r + ":" + u),
                            i != n[m].data[c].dateFormat && ((n[m].data[c].head_date_str = Common.dayOfWeek[g.getDay()] + " " + n[m].data[c].dateFormat), (n[m].data[c].head_date = !0), (i = n[m].data[c].dateFormat)),
                            Number.isInteger(n[m].data[c].round_int) || "8th Finals" == n[m].data[c].round || "16th Finals" == n[m].data[c].round || (n[m].showDateFilter = n[m].showDateFilter.replace("Vòng", ""));
                    }
                    o.push({ showDateFilter: n[m].showDateFilter, data: n[m].data, round: new Date(n[m].round), origin_round: _, primacy: Common.settings.listRoundLeague.indexOf(_) });
                }
            o.sort(function (e, a) {
                return e.round > a.round ? -1 : e.round < a.round ? 1 : 0;
            }),
                o.sort(function (e, a) {
                    return a.primacy - e.primacy;
                }),
                $("#filter-vongdau-kq").html(a({ dataItem: o })),
                e.eventDetailFixture("#filter-vongdau-kq");
        };
    },
    fixtures: function () {
        var e = this;
        e.dataEffect.data_trandau = !1;
        var a = Handlebars.compile($("#init-html").html());
        $("#detail-fixtures").html(a());
        var t = $("#detail-fixtures").data("fixtureid");
        Common.getEventFixture([t], function (a) {
            if (a.code) {
                let l = a.data[t].fixture_detail,
                    o = a.data[t].data;
                var i = { [l.home_team.team_id]: "event_home_team", [l.away_team.team_id]: "event_away_team" },
                    n = Common.mappingEventDetailMatch(o, l.elapsed, i);
                !(function (a, t) {
                    var i = Handlebars.compile($("#detail_match").html());
                    void 0 !== leagues_id_map[a.league_id] && leagues_id_map[a.league_id] > 0 && (a.league_id = leagues_id_map[a.league_id]);
                    var n = Common.settings.leagues_list[a.league_id];
                    if (void 0 === n) window.location.href = "/the-thao/du-lieu-bong-da";
                    else {
                        $('a[href="' + n.link + '"]')
                            .closest("li")
                            .addClass("active"),
                            (n.logo = css_url_vne + "/dulieubongda/pc/images/graphics/" + n.logo),
                            (e.dataEffect.league_detail = n),
                            void 0 !== a.score && void 0 !== a.score.halftime && (a.score.halftime = a.score.halftime.replace("-", " - "));
                        var l = Common.convertUTCDateToLocalDate(new Date(a.event_date)),
                            o = l.getDate() + "/" + parseInt(l.getMonth() + 1) + "/" + l.getFullYear();
                        (a.league_id != CHAMPION_LEAGUE && a.league_id != EUROPA_LEAGUE) || (8 != a.round_int && 16 != a.round_int) || (a.round_int = "1/" + a.round_int);
                        var d = l.getHours() < 10 ? "0" + l.getHours() : l.getHours(),
                            s = l.getMinutes() < 10 ? "0" + l.getMinutes() : l.getMinutes(),
                            r = " - Vòng " + a.round_int;
                        if (
                            ((void 0 === a.round_int || a.round_int <= 0) && void 0 !== Common.settings.mappingRound[a.round] && (r = " - " + Common.settings.mappingRound[a.round]),
                            (a.title_time = Common.dayOfWeek[l.getDay()] + " " + o + ", " + d + ":" + s + r),
                            (a.show_status = ""),
                            (a.ti_so = ""),
                            (a.show_status_live = !1),
                            (a.goals_home_team = void 0 !== a.goals_home_team ? a.goals_home_team : 0),
                            (a.goals_away_team = void 0 !== a.goals_away_team ? a.goals_away_team : 0),
                            "PST" == a.status_short
                                ? ((a.ti_so = "-&nbsp;&nbsp;&nbsp;&nbsp;-"), (a.show_status = '<span class="realtime-mins cancel">Hoãn</span>'))
                                : "1H" == a.status_short || "2H" == a.status_short
                                ? ((a.show_status = '<span class="realtime-mins cancel">' + a.elapsed + "</span>"), (a.ti_so = a.goals_home_team + "&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;" + a.goals_away_team), (a.show_status_live = !0))
                                : "FT" == a.status_short
                                ? ((a.ti_so = a.goals_home_team + "&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;" + a.goals_away_team), (a.show_status = '<span class="realtime-mins finish">Kết thúc</span>'))
                                : "NS" == a.status_short
                                ? (a.ti_so = d + "&nbsp;&nbsp;:&nbsp;&nbsp;" + s)
                                : void 0 !== a.score && void 0 !== a.score.fulltime && "PEN" == a.status_short
                                ? ((a.ti_so = a.score.fulltime.replace("-", " - ")), (a.show_status = '<span class="realtime-mins finish">Kết thúc</span>'))
                                : "AET" == a.status_short && ((a.ti_so = a.goals_home_team + "&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;" + a.goals_away_team), (a.show_status = '<span class="realtime-mins finish">Kết thúc</span>')),
                            $("#detail-trandau").html(i({ league: n, fixture_detail: a, hotEvent: { home_team: t.list_hot_event[a.home_team.team_id], away_team: t.list_hot_event[a.away_team.team_id] } })),
                            delete t.list_hot_event,
                            "FT" == a.status_short || "1H" == a.status_short || "2H" == a.status_short)
                        ) {
                            var u = Handlebars.compile($("#event_match").html());
                            $("#event-trandau").html(u({ home_team: a.home_team, away_team: a.away_team, dataEvent: t })),
                                $("#event-trandau").closest(".wrap-block-giaidau").removeClass("hidden"),
                                $('a[data-tabid="event-trandau"]').closest("li").removeClass("disable");
                        } else $(".wrap-tabs").addClass("empty"), $(".item-submenu").closest("li").removeClass("active");
                    }
                })(l, n),
                    Common.getStatisticFixture([t], function (a) {
                        (e.dataEffect.data_trandau = a),
                            (function (a, t) {
                                if (a) {
                                    var i = Common.mappingStatistic(a),
                                        n = Common.createUrlTeam(t.home_team.team_id, t.home_team.team_name, "detail"),
                                        l = Common.createUrlTeam(t.away_team.team_id, t.away_team.team_name, "detail"),
                                        o = `<a href="${n}" class="head-team team-home flexbox">\n                                <img src="${t.home_team.logo}" alt="${t.home_team.team_name}">\n                                <span class="name">${t.home_team.team_name}</span>  \n                            </a>\n                            <a href="${l}" class="head-team team-away flexbox">\n                                <img src="${t.away_team.logo}" alt="${t.away_team.team_name}">\n                                <span class="name">${t.away_team.team_name}</span>  \n                            </a>`;
                                    $("#solieu-trandau .block-solieu-trandau .tbl-solieu thead .head-top-team").html(o), $("#solieu-trandau .block-solieu-trandau .tbl-solieu tbody").html(i);
                                } else $("#solieu-trandau .block-solieu-trandau").remove();
                                $("#solieu-trandau .block-bangdiem").hasClass("loaded_data") ||
                                    ($("#solieu-trandau .block-bangdiem").addClass("loaded_data"),
                                    Common.data_bangdiem([e.dataEffect.league_detail.id], function (a) {
                                        if (a.code) {
                                            let q = e.dataEffect.league_detail;
                                            function i(e, a) {
                                                return e.points > a.points ? -1 : e.points < a.points ? 1 : 0;
                                            }
                                            for (let D in a.data)
                                                if (void 0 !== a.data[D].data && a.data[D].data.length > 0) {
                                                    var n = [],
                                                        l = [],
                                                        o = Common.settings.leagues_list[D];
                                                    if (Common.settings.uefa_list.includes(parseInt(D))) {
                                                        for (var d in a.data[D].data) {
                                                            var s = a.data[D].data[d];
                                                            void 0 !== o.config_standing[s.rank] ? (s.class_rank = o.config_standing[s.rank]) : (s.class_rank = ""),
                                                                void 0 !== l[s.group_id] && l[s.group_id].data.length > 0
                                                                    ? l[s.group_id].data.push(s)
                                                                    : ((l[s.group_id] = []), (l[s.group_id].data = [s]), (l[s.group_id].vongbang = Common.getGroupFromString(s.group)));
                                                        }
                                                        e.dataEffect.league_bangdiem = { data: l, show_rothang: !1 };
                                                    } else {
                                                        var r = a.data[D].data,
                                                            u = [],
                                                            m = 0,
                                                            _ = [],
                                                            c = [];
                                                        r.sort(i);
                                                        var g = r.length,
                                                            h = Math.ceil(g / 2);
                                                        for (var p in r)
                                                            void 0 !== o.config_standing[r[p].rank] ? (r[p].class_rank = o.config_standing[r[p].rank]) : (r[p].class_rank = ""), ++m <= h ? _.push(r[p]) : c.push(r[p]), u.push(r[p]);
                                                        e.dataEffect.league_bangdiem = { data: u, show_rothang: !0 };
                                                    }
                                                }
                                            var v = $("#container-bangdiem");
                                            if (e.dataEffect.league_bangdiem.show_rothang) {
                                                for (var d in e.dataEffect.league_bangdiem)
                                                    for (var p in e.dataEffect.league_bangdiem[d]) {
                                                        var f = "",
                                                            b = e.dataEffect.league_bangdiem[d][p].forme.split("");
                                                        for (var k in b) f += '<span class="item-pd ' + Common.stylePhongDo.style[b[k]] + '">' + Common.stylePhongDo.vn[b[k]] + "</span> ";
                                                        (e.dataEffect.league_bangdiem[d][p].contentPD = f),
                                                            (t.home_team.team_id != e.dataEffect.league_bangdiem[d][p].team_id && t.away_team.team_id != e.dataEffect.league_bangdiem[d][p].team_id) ||
                                                                (e.dataEffect.league_bangdiem[d][p].highlight = !0);
                                                    }
                                                var C = Handlebars.compile($("#template-bang-diem-full").html());
                                                v.replaceWith(
                                                    C({ league_id: q.id, bangdiem: [{ data: e.dataEffect.league_bangdiem.data, title_table: "1 - 20", league_link: q.link }], show_rothang: e.dataEffect.league_bangdiem.show_rothang })
                                                ).removeClass("box-placeholder");
                                            } else {
                                                n = [];
                                                var w = e.dataEffect.league_bangdiem.data,
                                                    y = !1;
                                                for (var d in w) {
                                                    var E = w[d].data;
                                                    for (var p in ((y = !1), E)) {
                                                        for (var k in ((f = ""), (b = E[p].forme.split("")))) f += '<span class="item-pd ' + Common.stylePhongDo.style[b[k]] + '">' + Common.stylePhongDo.vn[b[k]] + "</span> ";
                                                        (E[p].contentPD = f), (t.home_team.team_id != E[p].team_id && t.away_team.team_id != E[p].team_id) || ((E[p].highlight = !0), (y = !0));
                                                    }
                                                    y && n.push({ data: E, title_table: "Bảng " + w[d].vongbang, type: "multi_table", league_link: q.link });
                                                }
                                                (C = Handlebars.compile($("#template-bang-diem-full").html())),
                                                    v.replaceWith(C({ bangdiem: n, type: "multi_table", league_id: q.id, show_rothang: e.dataEffect.league_bangdiem.show_rothang })).removeClass("box-placeholder");
                                            }
                                            $("#goto-bangdiem").length > 0 &&
                                                ($("#goto-bangdiem").css("cursor", "pointer"),
                                                $("#goto-bangdiem").click(function () {
                                                    window.location = q.link + "/bang-diem";
                                                }));
                                        } else $("#block-bangdiem").remove();
                                    })),
                                    $('a[data-tabid="solieu-trandau"]').closest("li").removeClass("hidden"),
                                    $('a[data-tabid="solieu-trandau"]').closest("li").removeClass("disable"),
                                    $('a[data-tabid="event-trandau"]').closest("li").hasClass("disable") &&
                                        ($('a[data-tabid="solieu-trandau"]').closest("div.empty").removeClass("empty"), $('a[data-tabid="solieu-trandau"]').trigger("click"));
                            })(a.data.statistic, l),
                            $('a[data-tabid="solieu-trandau"]').closest("li").removeClass("hidden"),
                            void 0 !== a.data.players &&
                                void 0 !== a.data.lineups &&
                                (!(function (e, a) {
                                    var t = Common.sortDataLineup(e),
                                        i = t.format_home.formation.split("-"),
                                        n = t.format_away.formation.split("-"),
                                        l = Handlebars.compile($("#player_match").html());
                                    for (var o in t.format_away.doi_hinh_format) t.format_away.doi_hinh_format[o].reverse();
                                    var d = {
                                        fixtureDetail: a,
                                        format_home: t.format_home,
                                        format_away: t.format_away,
                                        home_total_layer: i.length,
                                        away_total_layer: n.length,
                                        img_map: css_url_vne + "/dulieubongda/pc/images/graphics/football_field.png",
                                    };
                                    $("#players-trandau").html(l(d));
                                })(a.data, l),
                                $('a[data-tabid="players-trandau"]').closest("li").removeClass("disable")),
                            Common.parseLinkPlayer("item-th flexbox");
                    });
            }
        }),
            $(".item-submenu").click(function () {
                var a = $(this).data("tabid");
                $(".item-submenu").closest("li").removeClass("active"),
                    $(this).closest("li").addClass("active"),
                    $(".tabcontent").css("display", "none"),
                    $("#" + a).css("display", "block"),
                    $("#" + a).hasClass("data-loaded") ||
                        ($("#" + a).addClass("data-loaded"),
                        void 0 !== e.dataEffect.data_trandau
                            ? e.dataEffect.data_trandau
                            : Common.getEventFixture([t], function (a) {
                                  a.code || (e.dataEffect.data_trandau = -1);
                              }));
            });
    },
};
dataFootball.init();
