(() => {
  const chart = new G2.Chart();

  // 一句话声明可视化
  chart
    .point()
    .data({
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/basement_prod/6b4aa721-b039-49b9-99d8-540b3f87d339.json',
    })
    .encode('x', 'weight')
    .encode('y', 'height')
    .encode('color', 'gender');

  chart.render();

  return chart.getContainer();
})();
