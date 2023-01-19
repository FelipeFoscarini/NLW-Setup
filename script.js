const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24"],
}

nlwSetup.setData(data)
nlwSetup.load()
