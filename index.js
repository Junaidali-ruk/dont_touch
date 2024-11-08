import fs from "fs";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";
const FILE_PATH = "./data.json";

// ایک دن پہلے کی تاریخ اور وقت حاصل کرنا

// ڈیٹا کو JSON فائل میں لکھنا

// گٹ انیشیئلائز

// کمیٹ اور پوش کا فنکشن
const git = simpleGit(); // initialize without parameters
// JSON فائل میں ڈیٹا لکھیں
const makecommit = (n) => {
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATEE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();
  const data = {
    date: DATEE,
  };
  async function commitAndPush() {
    try {
      await git.add(FILE_PATH); // فائل کو گٹ میں ایڈ کریں
      await git.commit(DATEE, { "--date": DATEE }, makecommit.bind(this, --n)); // کمیٹ کے دوران ڈیٹ سیٹ کریں
      if(n===0){
        await git.push(); // گٹ کو پوش کریں
      }
    } catch (error) {
      console.error("Error in committing and pushing:", error);
    }
  }
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), commitAndPush());
};

makecommit(100);
