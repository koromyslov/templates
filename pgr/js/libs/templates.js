angular.module('pgrModule').run(['$templateCache', function($templateCache) {
$templateCache.put('views/graphs.html', "<table id=\"graphs\">\n\t<tbody>\n\t\n\t\t<tr ng-repeat=\"(lKey,lItem) in leagues | orderBy:'position':true\"\t>\n\t\t\t<th>\n\t\t\t\t{{(lItem.position+1)*10000}}\n\t\t\t</th>\n\t\t\t<td ng-repeat=\"(uKey,uItem) in lItem.users\" points\" data-points=\"{{uItem.points}}\" data-step=\"{{lItem.position+1}}\">\n\t\t\t\t<a ng-if=\"uItem.name\" href=\"#/profile/{{uItem.sguid}}\">\n\t\t\t\t\t<img ng-if=\"uItem.avatar\" ng-src=\"{{uItem.avatar}}\" />\n\t\t\t\t\t<img ng-if=\"!uItem.avatar\" src=\"./images/unknown-person.png\" />\t\n\t\t\t\t</a>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\t0\n\t\t\t</th>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<ul id=\"loosers\">\n\t<li ng-repeat=\"(uKey,uItem) in looserUser\">\n\t\t<a ng-if=\"uItem\" href=\"#/profile/{{uItem.sguid}}\">\n\t\t\t<img ng-if=\"uItem.avatar\" ng-src=\"{{uItem.avatar}}\" />\n\t\t\t<img ng-if=\"!uItem.avatar\" src=\"./images/unknown-person.png\" />\t\n\t\t</a>\n\t</li>\n</ul>");
$templateCache.put('views/leagues.html', "<section class=\"leaglist\">\n\t<article ng-repeat=\"(leaguesKey, leagueItem) in leagues\">\n\t\t<a>\n\t\t\t<img ng-if=\"leagueItem.name == '1'\" src=\"/images/I.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '2'\" src=\"/images/II.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '3'\" src=\"/images/III.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '4'\" src=\"/images/IV.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '5'\" src=\"/images/V.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '6'\" src=\"/images/VI.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '7'\" src=\"/images/VII.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '8'\" src=\"/images/VIII.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '9'\" src=\"/images/IX.png\" />\n\t\t\t<img ng-if=\"leagueItem.name == '10'\" src=\"/images/X.png\" />\n\t\t</a>\n\t\t<div>\n\t\t\t<sub></sub>\n\t\t\t<sup></sup>\n\t\t\t<p>\n\t\t\t\t<a href=\"#/profile/{{userValue.sguid}}\" ng-repeat=\"(userKey, userValue) in leagueItem.users\">\n\t\t\t\t\t<img ng-src=\"{{userValue.avatar}}\" alt=\"\" err-src=\"/images/unknown-person.png\" />\n\t\t\t\t</a>\n\t\t\t</p>\n\t\t</div>\n\t</article>\n</section>");
$templateCache.put('views/main.html', "<section \n\tmsd-wheel=\"onWheel($event, $delta, $deltaX, $deltaY)\"\n\thm-dragleft=\"onDrag($event)\"\n\thm-dragright=\"onDrag($event)\"\n\tclass=\"gallery\" ng-controller=\"GalleryController\">\n\t<div isotope-container iso-options=\"opts\" ng-style=\"{left: scrollDelta}\" >\n\t\t<div\n\t\t\tng-mouseenter=\"onUserMouseEnter(userItem, $event)\"\n\t\t\tng-mouseleave=\"onUserMouseLeave(userItem, $event)\"\n\t\t\tng-click=\"onUserClick(userItem, $event)\"\n\t\t\tng-class=\"{big: userItem.hover, 'full-animate': userItem.fullAnimate}\"\n\t\t\tclass=\"league_{{userItem.league.name}} isotope\" \n\t\t\tng-repeat=\"userItem in users\"\n\t\t\thm-dragleft=\"onDrag($event)\"\n\t\t\thm-dragright=\"onDrag($event)\" >\n\t\t\t<div set-width class=\"wr\" back-img=\"{{userItem.avatar}}\" ng-click=\"switchState(userItem)\" >\n\t\t\t\t<i>{{userItem.points}}</i>\n\t\t\t\t<div class=\"sub\">\n\t\t\t\t\t<b>{{userItem.name}} <br /><s>{{userItem.league.name}} league</s></b>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a ng-click=\"onMoveToProfile(userItem)\">\n\t\t\t\t\t\t\t\t<span class=\"icon profile navigate\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<span class=\"icon compare navigate\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a ng-if=\"!userItem.isFrend\" ng-click=\"onFollow(userItem)\">\n\t\t\t\t\t\t\t\t<span class=\"icon follow navigate\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a ng-if=\"userItem.isFrend\" ng-click=\"onUnFollow(userItem)\">\n\t\t\t\t\t\t\t\t<span class=\"icon unfollow navigate\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");
$templateCache.put('views/my_profile.html', "<div class=\"mynav\" ng-if=\"workspace.user\">\n\t<ul>\n\t\t<li ng-click=\"onChange(1)\" ng-class=\"{current: tab == 1}\">\n\t\t\t<a>\n\t\t\t\t<img src=\"../images/pro2.png\" alt=\"\" ng-if=\"tab == 1\" />\n\t\t\t\t<img src=\"../images/pro.png\" alt=\"\" ng-if=\"tab != 1\" />\n\t\t\t</a>\n\t\t</li>\n\t\t<li ng-click=\"onChange(2)\" ng-class=\"{current: tab == 2}\">\n\t\t\t<a>\n\t\t\t\t<img src=\"../images/dash2.png\" alt=\"\" ng-if=\"tab == 2\" />\n\t\t\t\t<img src=\"../images/dash.png\" alt=\"\" ng-if=\"tab != 2\" />\n\t\t\t</a>\n\t\t</li>\n\t\t<li ng-click=\"onChange(3)\" ng-class=\"{current: tab == 3}\">\n\t\t\t<a>\n\t\t\t\t<img src=\"../images/set2.png\" alt=\"\" ng-if=\"tab == 3\" />\n\t\t\t\t<img src=\"../images/set.png\" alt=\"\" ng-if=\"tab != 3\" />\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\t<h2 ng-if=\"tab == 1\">\n\t\tProfile\n\t</h2>\n\t<h2 ng-if=\"tab == 2\">\n\t\tDashboard\n\t</h2>\n\t<h2 ng-if=\"tab == 3\">\n\t\tSettings\n\t</h2>\n</div>\n\n<div ng-if=\"tab == 1 && workspace.user\" class=\"tab\">\n\t<section class=\"tab\" ng-include src=\"'partials/myprofile.html'\" ></section>\n</div>\n<div ng-if=\"tab == 2 && workspace.user\" class=\"tab\">\n\t<section class=\"tab\" ng-include src=\"'partials/mydash.html'\" ></section>\n</div>\n<div ng-if=\"tab == 3 && workspace.user\" class=\"tab\">\n\t<section class=\"tab\" ng-include src=\"'partials/mysettings.html'\" ></section>\n</div>");
$templateCache.put('views/profile.html', "<section class=\"promain\" ng-include src=\"'partials/user.html'\" ></section>\n\n<section ng-controller=\"CompareController\" class=\"pronear\" id=\"compare\" app-view-segment=\"1\"></section>");
$templateCache.put('partials/compare.html', "<div class=\"comp\" ng-include src=\"'partials/user.html'\" ng-controller=\"UserController\" ng-init=\"currentUserId=routeUserId;allUser=false;isEdit=false;\"></div>");
$templateCache.put('partials/follow.html', "<section ng-controller=\"FollowController\" >\n\t<div id=\"follow_tab\" ng-if=\"frends.length > 0\">\n\t\t<img class=\"fuck\" src=\"/images/f.png\" alt=\"\" />\n\t\t<ul>\n\t\t\t<li \n\t\t\t\tng-class=\"{show: userItem.user.show}\" \n\t\t\t\tng-mouseleave=\"onMouseLeaveUser(userItem.user)\" \n\t\t\t\tng-click=\"onMouseEnterUser(userItem.user)\" \n\t\t\t\tng-mouseenter=\"onMouseEnterUser(userItem.user)\" \n\t\t\t\tng-repeat=\"userItem in frends\">\n\t\t\t\t<img \n\t\t\t\t\tng-click=\"onCompare(userItem.user)\" \n\t\t\t\t\tng-src=\"{{userItem.user.avatar}}\" \n\t\t\t\t\talt=\"\" \n\t\t\t\t\terr-src=\"/images/unknown-person.png\" />\n\t\t\t</li>\n\t\t</ul>\n\t\t<a ng-click=\"onMoveToUser()\"></a>\n\t</div>\n</section>");
$templateCache.put('partials/gallery.html', "<div class=\"galblo\">\n\t<div class=\"galblos isotope\"\n\t\tng-repeat=\"(userKey, userItem) in users\"\n\t\tng-mouseenter=\"onUserMouseEnter(userItem, $event)\"\n\t\tng-mouseleave=\"onUserMouseLeave(userItem, $event)\"\n\t\tng-click=\"onUserClick(userItem, $event)\"\n\t\tng-class=\"{big: userItem.hover}\"\n\t\tng-if=\"userItem.showItem\">\n\t\t<img ng-src=\"{{userItem.avatar}}\" err-src=\"/images/unknown-person.png\" />\n\t\t<span>{{userItem.points}}</span>\n\t\t<div class=\"sub\"> \n\t\t\t<b>{{userItem.name}} <br /><s>{{userItem.league.name}} league</s></b>\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<a ng-click=\"onMoveToProfile(userItem)\">\n\t\t\t\t\t\t<span class=\"icon profile navigate\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<span class=\"icon compare navigate\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a ng-if=\"!userItem.isFrend\" ng-click=\"onFollow(userItem)\">\n\t\t\t\t\t\t<span class=\"icon follow navigate\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a ng-if=\"userItem.isFrend\" ng-click=\"onUnFollow(userItem)\">\n\t\t\t\t\t\t<span class=\"icon unfollow navigate\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\n<sub ng-if=\"swipe > 0\" ng-click=\"onSwipeLeft()\"><img src=\"../images/left.png\"></sub>\n<sup ng-if=\"users.length > limit && swipe < swipeMax - 1\" ng-click=\"onSwipeRight()\"><img src=\"../images/right.png\"></sup>");
$templateCache.put('partials/leagues.html', "<section class=\"leaglist\">\n\t<a ng-click=\"onLeagUser(item)\" ng-class=\"{curleag:item.curleag}\" ng-repeat=\"(key, item) in leagues\">\n\t\t<img ng-if=\"key == 0\" src=\"/images/I.png\" />\n\t\t<img ng-if=\"key == 1\" src=\"/images/II.png\" />\n\t\t<img ng-if=\"key == 2\" src=\"/images/III.png\" />\n\t\t<img ng-if=\"key == 3\" src=\"/images/IV.png\" />\n\t\t<img ng-if=\"key == 4\" src=\"/images/V.png\" />\n\t\t<img ng-if=\"key == 5\" src=\"/images/VI.png\" />\n\t\t<img ng-if=\"key == 6\" src=\"/images/VII.png\" />\n\t\t<img ng-if=\"key == 7\" src=\"/images/VIII.png\" />\n\t\t<img ng-if=\"key == 8\" src=\"/images/IX.png\" />\n\t\t<img ng-if=\"key == 9\" src=\"/images/X.png\" />\n\t</a>\n</section>");
$templateCache.put('partials/loader.html', "<div id=\"modal-shadow\"  ng-controller=\"LoaderController\">\n</div>");
$templateCache.put('partials/login.html', "<div ng-controller=\"LoginModalController\">\n    <div class=\"modal login\" ng-class=\"{show: show}\">\n        <div class=\"modal_wrapper\">\n            <div class=\"header\" ng-if=\"signup\">\n               <h4>Sing up</h4>\n               <p>Already have an account? <a ng-click=\"onSignStateChange()\">Sign in</a></p>\n            </div>\n            <div class=\"header\" ng-if=\"!signup\">\n               <h4>Sign in</h4>\n               <p>Don’t have an account? <a ng-click=\"onSignStateChange()\">Sign up</a> now</p>\n            </div>\n            <div class=\"body\">\n                <div class=\"left\">\n                    <div class=\"left_wrapper\">\n                        <p>Join improva using your social account:</p>\n                        <ul>\n                            <li>\n                                <a ng-click=\"socialFacebookLogin()\">\n                                    <img src=\"/images/facebook.png\" alt=\"\" />\n                                </a>\n                            </li>\n                            <li>\n                                <a ng-click=\"socialGooglePlusLogin()\">\n                                    <img src=\"/images/google.png\" alt=\"\" />\n                                </a>\n                            </li>\n                            <li>\n                                <a>\n                                    <img src=\"/images/improva.png\" alt=\"\" />\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"right\">\n                    <div class=\"right_wrapper\">\n                        <div class=\"sign-up\" ng-if=\"signup\">\n                            <p>Or, sign up for a PGR account below:</p>\n                            <ng-form name=\"RegForm\" novalidate class=\"css-form myForm\" >\n                                <p>\n                                    <input \n                                        type=\"text\" \n                                        id=\"login_i\" \n                                        class=\"form-input\"\n                                        ng-model=\"user.login\" \n                                        required \n                                        ng-minlength=\"6\"\n                                        placeholder=\"Name\" />\n                                </p>\n                                <p class=\"tip\">This will be your display name on PGR.</p>\n                                <p>\n                                    <input \n                                        type=\"email\" \n                                        id=\"email_i\" \n                                        class=\"form-input\"\n                                        ng-model=\"user.email\" \n                                        required\n                                        placeholder=\"Email\"  /> \n                                </p>\n                                <p>\n                                    <input \n                                        type=\"password\" \n                                        id=\"name_i\" \n                                        class=\"form-input\"\n                                        ng-model=\"user.password\" \n                                        required \n                                        ng-minlength=\"6\"\n                                        placeholder=\"Choose a Password\" /> \n                                </p>\n                                <p class=\"tip\">Make it 6-25 characters</p>\n                                <p class=\"errors\" ng-if=\"error\">{{errors}}</p>\n                                <p>\n                                    <input \n                                        type=\"button\" \n                                        value=\"Sign me up\"\n                                        ng-disabled=\"RegForm.$invalid\"\n                                        ng-click=\"onAddUser()\" />\n                                </p>\n                            </ng-form>\n                        </div>\n                        <div class=\"sign-in\" ng-if=\"!signup\">\n                            <p>Or, sign in with your PGR account:</p>\n                            <ng-form id=\"login_form\" name=\"LoginForm\" novalidate class=\"css-form myForm\" >\n                                <p>\n                                    <input \n                                        type=\"text\" \n                                        id=\"login_i\" \n                                        class=\"form-input\"\n                                        ng-model=\"login.login\"\n                                        required \n                                        ng-minlength=\"6\"\n                                        placeholder=\"Email or Username\" />\n                                </p>\n                                <p>\n                                    <input \n                                        type=\"password\" \n                                        id=\"pass_i\"\n                                        class=\"form-input\"\n                                        ng-model=\"login.password\"\n                                        required \n                                        ng-minlength=\"6\"\n                                        placeholder=\"Password\" /> \n                                </p>\n                                <p>\n                                    <a href=\"#\">Forgot your password?</a>\n                                </p>\n                                <p class=\"errors\" ng-if=\"error\">{{error}}</p>\n                                <p>\n                                    <input \n                                        ng-disabled=\"LoginForm.$invalid\"\n                                        ng-click=\"onSingin()\" \n                                        type=\"button\" \n                                        value=\"Sign in\" />\n                                </p>\n                            </ng-form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put('partials/mydash.html', "<section class=\"mydash\">\n\t<p>My dashboard will be here</p>\n</section>");
$templateCache.put('partials/myprofile.html', "<section class=\"mypro acrd\">\n\t<div class=\"crits\" ng-controller=\"NeedsAndGoalsController\" ng-init=\"isUpdateCriteria=true;id=id;user=user\">\n\t\t<ul> \n\t\t\t<li ng-repeat=\"(needKey, needItem) in needs | orderBy:'position'\" data-needId=\"{{needItem.sguid}}\">\n\t\t\t\t<div class=\"cr\" ng-click=\"onShowGoals($event, needItem.sguid)\">\n\t\t\t\t\t<p>{{needItem.name}}</p>\n\t\t\t\t</div>\n\t\t\t\t<ul>\n\t\t\t\t\t<li ng-repeat=\"(goalKey,goalItem) in needItem.goals | orderBy:'position'\" data-goalid=\"{{goalItem.sguid}}\" >\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t<a ng-click=\"openCriteriumList($event, needItem, goalItem)\">\n\t\t\t\t\t\t\t\t<span><img ng-src=\"{{goalItem.icon}}\" alt=\"\" title=\"{{goalItem.name}}\" /></span>\n\t\t\t\t\t\t\t\t{{goalItem.name}}\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<span class=\"current_position\" style=\"width: {{(goalItem.current_value / (goalItem.points_summary ))*100}}%;\"></span>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>\n\n<section class=\"mypro\">\n\t<div class=\"crits\" ng-controller=\"NeedsAndGoalsController\" ng-init=\"isUpdateCriteria=true;id=id;user=user\">\n\t\t<ul> \n\t\t\t<li ng-repeat=\"(needKey, needItem) in needs | orderBy:'position'\" data-needId=\"{{needItem.sguid}}\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li ng-repeat=\"(goalKey,goalItem) in needItem.goals | orderBy:'position'\" data-goalid=\"{{goalItem.sguid}}\" >\t\t\t\t\t\t\n\t\t\t\t\t\t<ul class=\"criterion\">\n\t\t\t\t\t\t\t<li data-id=\"{{crItem.sguid}}\" ng-repeat=\"crItem in goalItem.criteriums | orderBy:'position'\" >\n\t\t\t\t\t\t\t\t<p>{{crItem.name}}</p>\n\t\t\t\t\t\t\t\t<div class=\"bord\">\n\t\t\t\t\t\t\t\t\t<ul class=\"crp\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t<li data-id=\"{{value.sguid}}\"  \n\t\t\t\t\t\t\t\t\t\t\t\tng-repeat=\"value in crItem.criteria_values | orderBy:'position'\"  \n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"{{value.user_criteria}} position_{{value.position}}\" ng-click=\"onCriteriaSelect(value, crItem, $event, needItem, goalItem)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i ng-if=\"value.sguid != 'none'\">{{value.name}}</i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i ng-if=\"value.sguid == 'none'\" class=\"null_criteria\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../images/ar.png\">\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<strong><img src=\"../images/com.png\"></strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>");
$templateCache.put('partials/mysettings.html', "<section class=\"myset\">\n\t<div \n\t\tclass=\"pmain pro promy\" \n\t\tng-controller=\"UserController\" >\n\t\t<div class=\"block\">\n\t\t\t<input \n\t\t\t\tclass=\"hidden\" \n\t\t\t\ttype=\"file\"  \n\t\t\t\tname=\"photo\" \n\t\t\t\tng-model=\"newImage\"\n\t\t\t\t\n\t\t\t\tid=\"photo\" \n\t\t\t\taccept=\"image/jpeg,image/png,image/gif\" />\n\t\t\t\n\t\t\t<div class=\"image_box\" ng-class=\"{updated: user.sguid == authUserId && isEdit}\">\n\t\t\t\t<img class=\"pp\" ng-src=\"{{workspace.user.avatar}}\" err-src=\"/images/unknown-person.png\" />\n\t\t\t\t<i>{{user.points}}</i>\n\t\t\t\t<a ng-click=\"onUpdateFile()\" title=\"\">Update image</a>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"publish\" ng-if=\"!workspace.user.published\">\n\t\t\t\t<p>\n\t\t\t\t\t<strong>Your account is private.<b>Only you can see your profile.</b></strong>\n\t\t\t\t\t<button ng-click=\"onPublish()\">{{'_PublishL_' | i18n}}</button>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"pmpar\">\n\t\t\t<p>\n\t\t\t\t<label for=\"name_i\">{{'_NameL_' | i18n}}:</label> \n\t\t\t\t<input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tid=\"name_i\" \n\t\t\t\t\tng-model=\"workspace.user.name\"\n\t\t\t\t\trequired\n\t\t\t\t\tng-minlength=\"6\" />\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"age_i\">{{'_BirthdayL_' | i18n}}:</label>\n\t\t\t\t<input \n\t\t\t\t\ttype=\"datetime\"\n\t\t\t\t\tng-model=\"workspace.user.birthdayDate\"\n\t\t\t\t\tui-date=\"dateOptions\"\n\t\t\t\t\tid=\"age_i\" />\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"loc_i\">{{'_LocL_' | i18n}}:</label>\n\t\t\t\t<input \n\t\t\t\t\tid=\"pro_i\" \n\t\t\t\t\tng-model=\"workspace.user.state.name\"\n\t\t\t\t\ttype=\"text\" ui-autocomplete=\"stateOption\"  />\n\t\t\t<p>\n\t\t\t\t<label for=\"pro_i\">{{'_ProfL_' | i18n}}:</label>\n\t\t\t\t<input \n\t\t\t\t\tid=\"pro_i\" \n\t\t\t\t\tng-model=\"workspace.user.profession.name\"\n\t\t\t\t\ttype=\"text\" ui-autocomplete=\"professionOption\"  />\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"email_i\">{{'_EmaiL_' | i18n}}:</label> \n\t\t\t\t<input \n\t\t\t\t\ttype=\"email\" \n\t\t\t\t\tid=\"email_i\" \n\t\t\t\t\tng-model=\"workspace.user.email\"\n\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\trequired />\n\t\t\t\t\t<button>{{'_ChaEm_' | i18n}}</button>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"username_i\">{{'_UserName_' | i18n}}:</label> \n\t\t\t\t<input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tid=\"username_i\" \n\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\trequired\n\t\t\t\t\tng-model=\"workspace.user.login\" />\n\t\t\t\t\t<button>{{'_ChaPas_' | i18n}}</button>\n\t\t\t</p>\n\t\t\t<!--\n\t\t\t<p ng-if=\"isEdit && user.sguid == authUserId\" ng-controller=\"QuickUserChangeCtrl\">\n\t\t\t\t<label for=\"acc_i\">{{'_AccL_' | i18n}}:</label>\n\t\t\t\t<select \n\t\t\t\t\tid=\"acc_i\"\n\t\t\t\t\tng-options=\"item.login for item in users\" \n\t\t\t\t\tng-model=\"nextUser\" \n\t\t\t\t\tng-change=\"onMoveUserClick($event, nextUser)\">\n\t\t\t\t\t<option value=\"\">{{user.login}}</option>\n\t\t\t\t</select>\n\t\t\t\t<i ng-if=\"!isEdit || user.sguid != authUserId\">{{user.login}}</i>\n\t\t\t</p>\n\t\t\t-->\n\t\t</div>\n\t</div>\n</section>");
$templateCache.put('partials/neighbours.html', "<div class=\"nearblock\" ng-controller=\"NeighboursCtrl\">\n\t<div ng-controller=\"GalleryController\"  ng-init=\"id='top';title='_topL_'\">\n\t\t<div class=\"lnbl\">\n\t\t\t<div class=\"gallery\" ng-if=\"users.length > 0\">\n\t\t\t\t<h4>{{localTitle}}</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"lnbl\" ng-include src=\"'partials/gallery.html'\"></div>\n\t</div>\n\t<i></i>\n\t<div ng-controller=\"GalleryController\"  ng-init=\"id='neigh';title='_neighL_'\">\n\t\t<div class=\"lnbl\" ng-include src=\"'partials/gallery.html'\"></div>\n\t</div>\n</div>");
$templateCache.put('partials/user.html', "<!--<div ng-controller=\"CropImageController\">\n\t<div modal=\"shouldBeOpen\" close=\"close()\" options=\"opts\">\n\t\t<div class=\"modal-body\">\n\t\t\t<form action=\"\" method=\"get\" accept-charset=\"utf-8\">\n\t\t\t\t<div id='cropContainer'>\n\t\t\t      <div class=\"cropper\">\n\t\t\t         <div class=\"file-input\">\n\t\t\t        \t\t<input id=\"photo_crop\" onchange=\"angular.element(this).scope().onReadFile()\" capture=\"camera\" type=\"file\" accept=\"image/*\" />\n\t\t\t         </div>\t\n\t\t\t         <div class=\"preview-container\">\n\t\t\t         \t<img src=\"\" id=\"crop_img\" alt=\"\" />\n\t\t        \t\t\t<canvas id=\"image_canvas\"></canvas>\n\t\t\t         </div>\n\t\t\t      </div>\n\t\t\t   </div>\n\t\t   </form>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button class=\"btn btn-success\" ng-click=\"onSend()\" ng-disabled=\"form.$invalid || isUnchanged(user)\">Ok</button>\n\t   \t<button class=\"btn btn-danger cancel\" ng-click=\"close()\">Cancel</button>\n\t\t</div>\n\t</div>\n</div>\n-->\n<div \n\tclass=\"pmain pro\" \n\tng-controller=\"UserController\" >\n\t<div class=\"block\" ng-if=\"user\">\n\t\t<input \n\t\t\tclass=\"hidden\" \n\t\t\ttype=\"file\"  \n\t\t\tname=\"photo\" \n\t\t\tng-model=\"newImage\"\n\t\t\t\n\t\t\tid=\"photo\" \n\t\t\taccept=\"image/jpeg,image/png,image/gif\" />\n\t\t\n\t\t<div class=\"image_box\" ng-class=\"{updated: user.sguid == authUserId && isEdit}\">\n\t\t\t<img class=\"pp\" ng-src=\"{{user.avatar}}\" err-src=\"/images/unknown-person.png\" />\n\t\t\t<i>{{user.points}}</i>\n\t\t\t<a ng-click=\"onUpdateFile()\" title=\"\">Update image</a>\n\t\t\t<span></span>\n\t\t</div>\n\t\t\n\t\t<!--\n\t\t<div class=\"publish\">\n\t\t\t<p>\n\t\t\t\t<button ng-click=\"onPublish()\" ng-if=\"authUserId == currentUserId && isEdit\">\n\t\t\t\t\t<span ng-switch on=\"user.published\" >\n\t\t\t\t\t\t<span ng-switch-when=\"1\">\n\t\t\t\t\t\t\t{{'_Update_' | i18n}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span ng-switch-when=\"0\">\n\t\t\t\t\t\t\t{{'_PublishL_' | i18n}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t\t<span ng-if=\"authUserId && authUserId != currentUserId\">\n\t\t\t\t\t<span ng-switch on=\"isFollow\" >\n\t\t\t\t\t\t<span ng-switch-when=\"false\">\n\t\t\t\t\t\t\t<button ng-click=\"onFollow()\">\n\t\t\t\t\t\t\t\t{{'_AddFrend_' | i18n}}\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span ng-switch-when=\"true\">\n\t\t\t\t\t\t\t<button class=\"unfollow\" ng-click=\"onUnFollow()\">\n\t\t\t\t\t\t\t\t{{'_RemoveFrend_' | i18n}}\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t</div>\n\t\t-->\t\n\t</div>\n\t<div class=\"pmpar\" ng-if=\"user\">\n\t\t<p>\n\t\t\t<label for=\"name_i\">{{'_NameL_' | i18n}}:</label> \n\t\t\t<input \n\t\t\t\ttype=\"text\" \n\t\t\t\tid=\"name_i\" \n\t\t\t\tclass=\"clean form-control\" \n\t\t\t\tng-model=\"user.name\"\n\t\t\t\treadonly=\"readonly\"\n\t\t\t\trequired\n\t\t\t\tng-minlength=\"6\"\n\t\t\t\tng-click=\"onElementClick($event)\"\n\t\t\t\tng-if=\"isEdit && user.sguid == authUserId\" />\n\t\t\t<i ng-if=\"!isEdit || user.sguid != authUserId\">{{user.name}}</i>\n\t\t</p>\n\t\t<!--\n\t\t<p>\n\t\t\t<label for=\"email_i\">{{'_EmaiL_' | i18n}}:</label> \n\t\t\t<input \n\t\t\t\ttype=\"email\" \n\t\t\t\tid=\"email_i\" \n\t\t\t\tclass=\"clean form-control\" \n\t\t\t\treadonly=\"readonly\"\n\t\t\t\tng-model=\"user.email\"\n\t\t\t\trequired\n\t\t\t\tng-click=\"onElementClick($event)\"\n\t\t\t\tng-if=\"isEdit && user.sguid == authUserId\" />\n\t\t\t\t<i ng-if=\"!isEdit || user.sguid != authUserId\">{{user.email}}</i>\n\t\t</p>\n\t\t<p ng-if=\"isEdit && user.sguid == authUserId\" ng-controller=\"QuickUserChangeCtrl\">\n\t\t\t<label for=\"acc_i\">{{'_AccL_' | i18n}}:</label>\n\t\t\t<select \n\t\t\t\tid=\"acc_i\"\n\t\t\t\tng-options=\"item.login for item in users\" \n\t\t\t\tng-model=\"nextUser\" \n\t\t\t\treadonly=\"readonly\"\n\t\t\t\tng-change=\"onMoveUserClick($event, nextUser)\">\n\t\t\t\t<option value=\"\">{{user.login}}</option>\n\t\t\t</select>\n\t\t\t<i ng-if=\"!isEdit || user.sguid != authUserId\">{{user.login}}</i>\n\t\t</p>\n\t\t-->\n\t\t<p>\n\t\t\t<label for=\"age_i\">{{'_BirthdayL_' | i18n}}:</label>\n\t\t\t<input \n\t\t\t\ttype=\"text\" \n\t\t\t\tng-model=\"user.birthday\" \n\t\t\t\tdata-date-format=\"dd/mm/yyyy\" \n\t\t\t\tbs-datepicker\n\t\t\t\treadonly=\"readonly\"\n\t\t\t\tclass=\"clean form-control\" \n\t\t\t\tid=\"age_i\"\n\t\t\t\tng-click=\"onElementClick($event)\"\n\t\t\t\tng-if=\"isEdit && user.sguid == authUserId\" />\n\t\t\t<i ng-if=\"!isEdit || user.sguid != authUserId\">{{user.birthday}}</i>\n\t\t</p>\n\t\t<p>\n\t\t\t<label for=\"loc_i\">{{'_LocL_' | i18n}}:</label>\n\t\t\t<select \n\t\t\t\tng-options=\"item.sguid as item.name for item in states\" \n\t\t\t\tng-model=\"user.state.sguid\" \n\t\t\t\treadonly=\"readonly\" \n\t\t\t\tid=\"loc_i\"\n\t\t\t\tng-click=\"onElementClick($event)\"\n\t\t\t\tng-if=\"isEdit && user.sguid == authUserId\">\n\t\t\t</select>\n\t\t\t<i ng-if=\"!isEdit || user.sguid != authUserId\">{{user.state.name}}</i>\n\t\t<p>\n\t\t\t<label for=\"pro_i\">{{'_ProfL_' | i18n}}:</label>\n\t\t\t<input \n\t\t\t\tid=\"pro_i\" \n\t\t\t\tng-if=\"isEdit && user.sguid == authUserId\" \n\t\t\t\tng-model=\"user.profession.name\" \n\t\t\t\ttype=\"text\" \n\t\t\t\tbs-typeahead=\"professionFn\"\n\t\t\t\treadonly=\"readonly\"\n\t\t\t\tng-click=\"onElementClick($event)\" />\n\t\t\t<i ng-if=\"!isEdit || user.sguid != authUserId\">{{user.profession.name}}</i>\n\t\t</p>\n\n\t\t<p>\n\t\t\t<label for=\"pro_i\">{{'_LEAGUES_' | i18n}}:</label>\n\t\t\t<i>{{user.league.name}}</i>\n\t\t</p>\n\t</div>\n\n\t<a class=\"il\" ng-if=\"user && !user.isFollow\" ng-click=\"onFollow()\"><img src=\"../images/i3l.png\"></a>\n\t<a class=\"il\" ng-if=\"user && user.isFollow\" ng-click=\"onUnFollow()\"><img src=\"../images/i3i.png\"></a>\n\n\t<a class=\"il\" ng-if=\"user\"><img src=\"../images/i2l.png\"></a> \n</div>\n\n<div class=\"crits\" ng-controller=\"NeedsAndGoalsController\" ng-init=\"isUpdateCriteria=true;id=id;user=user\">\n\t<ul> \n\t\t<li ng-repeat=\"(needKey, needItem) in needs | orderBy:'position'\" data-needId=\"{{needItem.sguid}}\">\n\t\t\t<div class=\"cr\" ng-click=\"onShowGoals($event, needItem.sguid)\">\n\t\t\t\t<p>{{needItem.name}}<s></s></p>\n\t\t\t\t<div class=\"right\" ng-if=\"needItem.current_value\">\n\t\t\t\t\t<b>{{needItem.current_value}} / {{needItem.points_summary}}</b>\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t<span \n\t\t\t\t\t\t\tclass=\"current_position\" \n\t\t\t\t\t\t\tstyle=\"width: {{(needItem.current_value / (needItem.points_summary ))*100}}%;\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</strong>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul>\n\t\t\t\t<li ng-repeat=\"(goalKey,goalItem) in needItem.goals | orderBy:'position'\" data-goalid=\"{{goalItem.sguid}}\" >\n\t\t\t\t\t<h5>\n\t\t\t\t\t\t<a ng-click=\"openCriteriumList($event, needItem, goalItem)\">\n\t\t\t\t\t\t\t<span><img ng-src=\"{{goalItem.icon}}\" alt=\"\" title=\"{{goalItem.name}}\" /></span>\n\t\t\t\t\t\t\t{{goalItem.name}}\n\t\t\t\t\t\t\t<s></s>\n\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t<b>{{goalItem.current_value}} / {{goalItem.points_summary}}</b>\t\n\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t<span class=\"current_position\" style=\"width: {{(goalItem.current_value / (goalItem.points_summary ))*100}}%;\"></span>\n\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</h5>\n\t\t\t\t\t<ul class=\"criterion\">\n\t\t\t\t\t\t<li data-id=\"{{crItem.sguid}}\" ng-repeat=\"crItem in goalItem.criteriums | orderBy:'position'\" >\n\t\t\t\t\t\t\t<p>{{crItem.name}}</p>\n\t\t\t\t\t\t\t<div class=\"bord\">\n\t\t\t\t\t\t\t\t<ul class=\"crp\">\n\t\t\t\t\t\t\t\t\t<div class=\"tab\">\n\t\t\t\t\t\t\t\t\t\t<li data-id=\"{{value.sguid}}\"  \n\t\t\t\t\t\t\t\t\t\t\tng-repeat=\"value in crItem.criteria_values | orderBy:'position'\"  \n\t\t\t\t\t\t\t\t\t\t\tclass=\"{{value.user_criteria}} position_{{value.position}}\" ng-click=\"onCriteriaSelect(value, crItem, $event, needItem, goalItem)\">\n\t\t\t\t\t\t\t\t\t\t\t<i ng-if=\"value.sguid != 'none'\">{{value.name}}</i>\n\t\t\t\t\t\t\t\t\t\t\t<i ng-if=\"value.sguid == 'none'\" class=\"null_criteria\"></i>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<img src=\"../images/ar.png\">\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<strong><img src=\"../images/com.png\"></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>\n");
}]);