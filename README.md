# Dynamic Configuration Demo

### GitHub Project Clone

---

- Clone the `dynamic-configuration-demo` repository & install its dependencies:
  ```sh
  $ git clone https://github.com/darshanshah1996/dynamic-configuration-demo.git
  $ cd dynamic-configuration-demo && npm install
  ```

### Test Run

---

1. To run a spec suite, execute command `npx wdio --suite <suite name>`


#### Generate Conig File Locally For Sepcific Job

---

1. To generate confic file for running sanity workflow
   `CONFIG_TXT=sanity node generate_confg_script.js`
