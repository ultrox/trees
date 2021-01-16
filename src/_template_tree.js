function fn_for_bt(t) {
  if(t === null) return "...";
  else {
    return (
      t.val + "..." + // Int
      fn_for_bt(t.left) + "..." +
      fn_for_bt(t.right))
  }
}

module.exports = { fn_for_bt };
