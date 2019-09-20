
class HomeController {
  async store(req, res) {
    return res.json({ Message: 'Hello World' });
  }
}

export default new HomeController();