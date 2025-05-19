function calculateWeight() {
  const length = parseFloat(document.getElementById("length").value);
  const webHeight = parseFloat(document.getElementById("webHeight").value);
  const flangeWidth = parseFloat(document.getElementById("flangeWidth").value);
  const flangeThickness = parseFloat(document.getElementById("flangeThickness").value);
  const webThickness = parseFloat(document.getElementById("webThickness").value);
  const count = parseInt(document.getElementById("count").value);

  if (
    isNaN(length) || isNaN(webHeight) || isNaN(flangeWidth) ||
    isNaN(flangeThickness) || isNaN(webThickness) || isNaN(count) || count < 1
  ) {
    document.getElementById("result").innerText = "من فضلك أدخل جميع القيم بشكل صحيح.";
    return;
  }

  const flangeArea = 2 * (flangeWidth * flangeThickness);
  const webArea = webHeight * webThickness;
  const totalArea = flangeArea + webArea;

  const volume = totalArea * length;
  const volume_m3 = volume / 1_000_000_000;
  const singleWeight = volume_m3 * 7850;

  const totalWeight = singleWeight * count;

  document.getElementById("result").innerHTML = `
    الوزن التقريبي للعمود الواحد: ${singleWeight.toFixed(2)} كجم<br>
    الوزن الكلي (${count} عمود): ${totalWeight.toFixed(2)} كجم
  `;
}
