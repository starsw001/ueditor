/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/autoheight.js']) {
  _$jscoverage['plugins/autoheight.js'] = [];
  _$jscoverage['plugins/autoheight.js'][9] = 0;
  _$jscoverage['plugins/autoheight.js'][10] = 0;
  _$jscoverage['plugins/autoheight.js'][12] = 0;
  _$jscoverage['plugins/autoheight.js'][13] = 0;
  _$jscoverage['plugins/autoheight.js'][14] = 0;
  _$jscoverage['plugins/autoheight.js'][17] = 0;
  _$jscoverage['plugins/autoheight.js'][24] = 0;
  _$jscoverage['plugins/autoheight.js'][25] = 0;
  _$jscoverage['plugins/autoheight.js'][26] = 0;
  _$jscoverage['plugins/autoheight.js'][27] = 0;
  _$jscoverage['plugins/autoheight.js'][28] = 0;
  _$jscoverage['plugins/autoheight.js'][30] = 0;
  _$jscoverage['plugins/autoheight.js'][31] = 0;
  _$jscoverage['plugins/autoheight.js'][32] = 0;
  _$jscoverage['plugins/autoheight.js'][34] = 0;
  _$jscoverage['plugins/autoheight.js'][35] = 0;
  _$jscoverage['plugins/autoheight.js'][37] = 0;
  _$jscoverage['plugins/autoheight.js'][38] = 0;
  _$jscoverage['plugins/autoheight.js'][40] = 0;
  _$jscoverage['plugins/autoheight.js'][42] = 0;
  _$jscoverage['plugins/autoheight.js'][44] = 0;
  _$jscoverage['plugins/autoheight.js'][46] = 0;
  _$jscoverage['plugins/autoheight.js'][49] = 0;
  _$jscoverage['plugins/autoheight.js'][54] = 0;
  _$jscoverage['plugins/autoheight.js'][55] = 0;
  _$jscoverage['plugins/autoheight.js'][56] = 0;
  _$jscoverage['plugins/autoheight.js'][58] = 0;
  _$jscoverage['plugins/autoheight.js'][59] = 0;
  _$jscoverage['plugins/autoheight.js'][60] = 0;
  _$jscoverage['plugins/autoheight.js'][61] = 0;
  _$jscoverage['plugins/autoheight.js'][62] = 0;
  _$jscoverage['plugins/autoheight.js'][64] = 0;
  _$jscoverage['plugins/autoheight.js'][65] = 0;
  _$jscoverage['plugins/autoheight.js'][66] = 0;
  _$jscoverage['plugins/autoheight.js'][68] = 0;
  _$jscoverage['plugins/autoheight.js'][69] = 0;
  _$jscoverage['plugins/autoheight.js'][70] = 0;
  _$jscoverage['plugins/autoheight.js'][71] = 0;
  _$jscoverage['plugins/autoheight.js'][72] = 0;
  _$jscoverage['plugins/autoheight.js'][73] = 0;
  _$jscoverage['plugins/autoheight.js'][74] = 0;
  _$jscoverage['plugins/autoheight.js'][75] = 0;
  _$jscoverage['plugins/autoheight.js'][77] = 0;
  _$jscoverage['plugins/autoheight.js'][78] = 0;
  _$jscoverage['plugins/autoheight.js'][80] = 0;
  _$jscoverage['plugins/autoheight.js'][82] = 0;
  _$jscoverage['plugins/autoheight.js'][84] = 0;
  _$jscoverage['plugins/autoheight.js'][86] = 0;
  _$jscoverage['plugins/autoheight.js'][87] = 0;
  _$jscoverage['plugins/autoheight.js'][88] = 0;
  _$jscoverage['plugins/autoheight.js'][89] = 0;
  _$jscoverage['plugins/autoheight.js'][90] = 0;
  _$jscoverage['plugins/autoheight.js'][92] = 0;
  _$jscoverage['plugins/autoheight.js'][93] = 0;
  _$jscoverage['plugins/autoheight.js'][95] = 0;
  _$jscoverage['plugins/autoheight.js'][96] = 0;
  _$jscoverage['plugins/autoheight.js'][97] = 0;
  _$jscoverage['plugins/autoheight.js'][98] = 0;
  _$jscoverage['plugins/autoheight.js'][99] = 0;
}
_$jscoverage['plugins/autoheight.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///commands &#24403;&#36755;&#20837;&#20869;&#23481;&#36229;&#36807;&#32534;&#36753;&#22120;&#39640;&#24230;&#26102;&#65292;&#32534;&#36753;&#22120;&#33258;&#21160;&#22686;&#39640;</span>","<span class=\"c\">///commandsName  AutoHeight,autoHeightEnabled</span>","<span class=\"c\">///commandsTitle  &#33258;&#21160;&#22686;&#39640;</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * @description &#33258;&#21160;&#20280;&#23637;</span>","<span class=\"c\"> * @author zhanyi</span>","<span class=\"c\"> */</span>","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'autoheight'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","    <span class=\"c\">//&#25552;&#20379;&#24320;&#20851;&#65292;&#23601;&#31639;&#21152;&#36733;&#20063;&#21487;&#20197;&#20851;&#38381;</span>","    me<span class=\"k\">.</span>autoHeightEnabled <span class=\"k\">=</span> me<span class=\"k\">.</span>options<span class=\"k\">.</span>autoHeightEnabled <span class=\"k\">!==</span> <span class=\"k\">false</span><span class=\"k\">;</span>","    <span class=\"k\">if</span> <span class=\"k\">(!</span>me<span class=\"k\">.</span>autoHeightEnabled<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","","    <span class=\"k\">var</span> bakOverflow<span class=\"k\">,</span>","        span<span class=\"k\">,</span> tmpNode<span class=\"k\">,</span>","        lastHeight <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span>","        options <span class=\"k\">=</span> me<span class=\"k\">.</span>options<span class=\"k\">,</span>","        currentHeight<span class=\"k\">,</span>","        timer<span class=\"k\">;</span>","","    <span class=\"k\">function</span> adjustHeight<span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","        clearTimeout<span class=\"k\">(</span>timer<span class=\"k\">);</span>","        <span class=\"k\">if</span><span class=\"k\">(</span>isFullscreen<span class=\"k\">)</span><span class=\"k\">return</span><span class=\"k\">;</span>","        timer <span class=\"k\">=</span> setTimeout<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","","            <span class=\"k\">if</span> <span class=\"k\">(</span>me<span class=\"k\">.</span>queryCommandState <span class=\"k\">&amp;&amp;</span> me<span class=\"k\">.</span>queryCommandState<span class=\"k\">(</span><span class=\"s\">'source'</span><span class=\"k\">)</span> <span class=\"k\">!=</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(!</span>span<span class=\"k\">)</span> <span class=\"k\">{</span>","                    span <span class=\"k\">=</span> me<span class=\"k\">.</span>document<span class=\"k\">.</span>createElement<span class=\"k\">(</span><span class=\"s\">'span'</span><span class=\"k\">);</span>","                    <span class=\"c\">//trace:1764</span>","                    span<span class=\"k\">.</span>style<span class=\"k\">.</span>cssText <span class=\"k\">=</span> <span class=\"s\">'display:block;width:0;margin:0;padding:0;border:0;clear:both;'</span><span class=\"k\">;</span>","                    span<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> <span class=\"s\">'.'</span><span class=\"k\">;</span>","                <span class=\"k\">}</span>","                tmpNode <span class=\"k\">=</span> span<span class=\"k\">.</span>cloneNode<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>","                me<span class=\"k\">.</span>body<span class=\"k\">.</span>appendChild<span class=\"k\">(</span>tmpNode<span class=\"k\">);</span>","","                currentHeight <span class=\"k\">=</span> Math<span class=\"k\">.</span>max<span class=\"k\">(</span>domUtils<span class=\"k\">.</span>getXY<span class=\"k\">(</span>tmpNode<span class=\"k\">).</span>y <span class=\"k\">+</span> tmpNode<span class=\"k\">.</span>offsetHeight<span class=\"k\">,</span>Math<span class=\"k\">.</span>max<span class=\"k\">(</span>options<span class=\"k\">.</span>minFrameHeight<span class=\"k\">,</span> options<span class=\"k\">.</span>initialFrameHeight<span class=\"k\">));</span>","","                <span class=\"k\">if</span> <span class=\"k\">(</span>currentHeight <span class=\"k\">!=</span> lastHeight<span class=\"k\">)</span> <span class=\"k\">{</span>","","                    me<span class=\"k\">.</span>setHeight<span class=\"k\">(</span>currentHeight<span class=\"k\">);</span>","","                    lastHeight <span class=\"k\">=</span> currentHeight<span class=\"k\">;</span>","                <span class=\"k\">}</span>","","                domUtils<span class=\"k\">.</span>remove<span class=\"k\">(</span>tmpNode<span class=\"k\">);</span>","","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"s\">50</span><span class=\"k\">);</span>","    <span class=\"k\">}</span>","    <span class=\"k\">var</span> isFullscreen<span class=\"k\">;</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'fullscreenchanged'</span><span class=\"k\">,</span><span class=\"k\">function</span><span class=\"k\">(</span>cmd<span class=\"k\">,</span>f<span class=\"k\">)</span><span class=\"k\">{</span>","        isFullscreen <span class=\"k\">=</span> f","    <span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'destroy'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'contentchange'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'afterinserthtml'</span><span class=\"k\">,</span>adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'keyup'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'mouseup'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>enableAutoHeight <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"k\">if</span> <span class=\"k\">(!</span>me<span class=\"k\">.</span>autoHeightEnabled<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","        <span class=\"k\">var</span> doc <span class=\"k\">=</span> me<span class=\"k\">.</span>document<span class=\"k\">;</span>","        me<span class=\"k\">.</span>autoHeightEnabled <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","        bakOverflow <span class=\"k\">=</span> doc<span class=\"k\">.</span>body<span class=\"k\">.</span>style<span class=\"k\">.</span>overflowY<span class=\"k\">;</span>","        doc<span class=\"k\">.</span>body<span class=\"k\">.</span>style<span class=\"k\">.</span>overflowY <span class=\"k\">=</span> <span class=\"s\">'hidden'</span><span class=\"k\">;</span>","        me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'contentchange'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'afterinserthtml'</span><span class=\"k\">,</span>adjustHeight<span class=\"k\">)</span>","        me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'keyup'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'mouseup'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        <span class=\"c\">//ff&#19981;&#32473;&#20107;&#20214;&#31639;&#24471;&#19981;&#23545;</span>","        setTimeout<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            adjustHeight<span class=\"k\">.</span>call<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span> browser<span class=\"k\">.</span>gecko <span class=\"k\">?</span> <span class=\"s\">100</span> <span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">);</span>","        me<span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'autoheightchanged'</span><span class=\"k\">,</span> me<span class=\"k\">.</span>autoHeightEnabled<span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    me<span class=\"k\">.</span>disableAutoHeight <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","","        me<span class=\"k\">.</span>body<span class=\"k\">.</span>style<span class=\"k\">.</span>overflowY <span class=\"k\">=</span> bakOverflow <span class=\"k\">||</span> <span class=\"s\">''</span><span class=\"k\">;</span>","","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'contentchange'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'keyup'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'mouseup'</span><span class=\"k\">,</span> adjustHeight<span class=\"k\">);</span>","        me<span class=\"k\">.</span>autoHeightEnabled <span class=\"k\">=</span> <span class=\"k\">false</span><span class=\"k\">;</span>","        me<span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'autoheightchanged'</span><span class=\"k\">,</span> me<span class=\"k\">.</span>autoHeightEnabled<span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'ready'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        me<span class=\"k\">.</span>enableAutoHeight<span class=\"k\">();</span>","        <span class=\"c\">//trace:1764</span>","        <span class=\"k\">var</span> timer<span class=\"k\">;</span>","        domUtils<span class=\"k\">.</span>on<span class=\"k\">(</span>browser<span class=\"k\">.</span>ie <span class=\"k\">?</span> me<span class=\"k\">.</span>body <span class=\"k\">:</span> me<span class=\"k\">.</span>document<span class=\"k\">,</span> browser<span class=\"k\">.</span>webkit <span class=\"k\">?</span> <span class=\"s\">'dragover'</span> <span class=\"k\">:</span> <span class=\"s\">'drop'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            clearTimeout<span class=\"k\">(</span>timer<span class=\"k\">);</span>","            timer <span class=\"k\">=</span> setTimeout<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","                adjustHeight<span class=\"k\">.</span>call<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">);</span>","            <span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"s\">100</span><span class=\"k\">);</span>","","        <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","","","<span class=\"k\">}</span><span class=\"k\">;</span>",""];
_$jscoverage['plugins/autoheight.js'][9]++;
UE.plugins.autoheight = (function () {
  _$jscoverage['plugins/autoheight.js'][10]++;
  var me = this;
  _$jscoverage['plugins/autoheight.js'][12]++;
  me.autoHeightEnabled = (me.options.autoHeightEnabled !== false);
  _$jscoverage['plugins/autoheight.js'][13]++;
  if ((! me.autoHeightEnabled)) {
    _$jscoverage['plugins/autoheight.js'][14]++;
    return;
  }
  _$jscoverage['plugins/autoheight.js'][17]++;
  var bakOverflow, span, tmpNode, lastHeight = 0, options = me.options, currentHeight, timer;
  _$jscoverage['plugins/autoheight.js'][24]++;
  function adjustHeight() {
    _$jscoverage['plugins/autoheight.js'][25]++;
    var me = this;
    _$jscoverage['plugins/autoheight.js'][26]++;
    clearTimeout(timer);
    _$jscoverage['plugins/autoheight.js'][27]++;
    if (isFullscreen) {
      _$jscoverage['plugins/autoheight.js'][27]++;
      return;
    }
    _$jscoverage['plugins/autoheight.js'][28]++;
    timer = setTimeout((function () {
  _$jscoverage['plugins/autoheight.js'][30]++;
  if ((me.queryCommandState && (me.queryCommandState("source") != 1))) {
    _$jscoverage['plugins/autoheight.js'][31]++;
    if ((! span)) {
      _$jscoverage['plugins/autoheight.js'][32]++;
      span = me.document.createElement("span");
      _$jscoverage['plugins/autoheight.js'][34]++;
      span.style.cssText = "display:block;width:0;margin:0;padding:0;border:0;clear:both;";
      _$jscoverage['plugins/autoheight.js'][35]++;
      span.innerHTML = ".";
    }
    _$jscoverage['plugins/autoheight.js'][37]++;
    tmpNode = span.cloneNode(true);
    _$jscoverage['plugins/autoheight.js'][38]++;
    me.body.appendChild(tmpNode);
    _$jscoverage['plugins/autoheight.js'][40]++;
    currentHeight = Math.max((domUtils.getXY(tmpNode).y + tmpNode.offsetHeight), Math.max(options.minFrameHeight, options.initialFrameHeight));
    _$jscoverage['plugins/autoheight.js'][42]++;
    if ((currentHeight != lastHeight)) {
      _$jscoverage['plugins/autoheight.js'][44]++;
      me.setHeight(currentHeight);
      _$jscoverage['plugins/autoheight.js'][46]++;
      lastHeight = currentHeight;
    }
    _$jscoverage['plugins/autoheight.js'][49]++;
    domUtils.remove(tmpNode);
  }
}), 50);
}
  _$jscoverage['plugins/autoheight.js'][54]++;
  var isFullscreen;
  _$jscoverage['plugins/autoheight.js'][55]++;
  me.addListener("fullscreenchanged", (function (cmd, f) {
  _$jscoverage['plugins/autoheight.js'][56]++;
  isFullscreen = f;
}));
  _$jscoverage['plugins/autoheight.js'][58]++;
  me.addListener("destroy", (function () {
  _$jscoverage['plugins/autoheight.js'][59]++;
  me.removeListener("contentchange", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][60]++;
  me.removeListener("afterinserthtml", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][61]++;
  me.removeListener("keyup", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][62]++;
  me.removeListener("mouseup", adjustHeight);
}));
  _$jscoverage['plugins/autoheight.js'][64]++;
  me.enableAutoHeight = (function () {
  _$jscoverage['plugins/autoheight.js'][65]++;
  if ((! me.autoHeightEnabled)) {
    _$jscoverage['plugins/autoheight.js'][66]++;
    return;
  }
  _$jscoverage['plugins/autoheight.js'][68]++;
  var doc = me.document;
  _$jscoverage['plugins/autoheight.js'][69]++;
  me.autoHeightEnabled = true;
  _$jscoverage['plugins/autoheight.js'][70]++;
  bakOverflow = doc.body.style.overflowY;
  _$jscoverage['plugins/autoheight.js'][71]++;
  doc.body.style.overflowY = "hidden";
  _$jscoverage['plugins/autoheight.js'][72]++;
  me.addListener("contentchange", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][73]++;
  me.addListener("afterinserthtml", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][74]++;
  me.addListener("keyup", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][75]++;
  me.addListener("mouseup", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][77]++;
  setTimeout((function () {
  _$jscoverage['plugins/autoheight.js'][78]++;
  adjustHeight.call(this);
}), (browser.gecko? 100: 0));
  _$jscoverage['plugins/autoheight.js'][80]++;
  me.fireEvent("autoheightchanged", me.autoHeightEnabled);
});
  _$jscoverage['plugins/autoheight.js'][82]++;
  me.disableAutoHeight = (function () {
  _$jscoverage['plugins/autoheight.js'][84]++;
  me.body.style.overflowY = (bakOverflow || "");
  _$jscoverage['plugins/autoheight.js'][86]++;
  me.removeListener("contentchange", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][87]++;
  me.removeListener("keyup", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][88]++;
  me.removeListener("mouseup", adjustHeight);
  _$jscoverage['plugins/autoheight.js'][89]++;
  me.autoHeightEnabled = false;
  _$jscoverage['plugins/autoheight.js'][90]++;
  me.fireEvent("autoheightchanged", me.autoHeightEnabled);
});
  _$jscoverage['plugins/autoheight.js'][92]++;
  me.addListener("ready", (function () {
  _$jscoverage['plugins/autoheight.js'][93]++;
  me.enableAutoHeight();
  _$jscoverage['plugins/autoheight.js'][95]++;
  var timer;
  _$jscoverage['plugins/autoheight.js'][96]++;
  domUtils.on((browser.ie? me.body: me.document), (browser.webkit? "dragover": "drop"), (function () {
  _$jscoverage['plugins/autoheight.js'][97]++;
  clearTimeout(timer);
  _$jscoverage['plugins/autoheight.js'][98]++;
  timer = setTimeout((function () {
  _$jscoverage['plugins/autoheight.js'][99]++;
  adjustHeight.call(this);
}), 100);
}));
}));
});