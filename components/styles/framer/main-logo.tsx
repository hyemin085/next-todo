import { motion } from "framer-motion";

export function MainLogo() {
  return (
    <div style={{ width: 400, height: 400, position: "relative", marginLeft: "200px"}}>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          position: "absolute",
          left: 40,
          top: 40,
        }}
        animate={{ backgroundColor: "#f5c16e" }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "hsl(0, 100%, 100%)",
          position: "absolute",
          right: 40,
          bottom: 40,
        }}
        animate={{ backgroundColor: "#f59570" }}
        transition={{ duration: 0.3, delay: 2 }}
      />

        <motion.div
            style={{
                width: 120,
                height:120,
                borderRadius: 30,
                backgroundColor: "#fff",
                position: "absolute",
                left: "50%",
                top: "50%",
                margin: "50px 0 0 -150px",
            }}
            animate={{ backgroundColor: "#dbe58a" }}
            transition={{ duration: 0.3, delay: 4}}
        />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: 30,
          backgroundColor: "#fff",
          position: "absolute",
          left: "50%",
          top: "50%",
          margin: "-100px 0 0 -100px",
        }}
        animate={{ backgroundColor: "#af8ef5" }}
        transition={{ duration: 0.3, delay: 5 }}
      />
        <motion.div
            style={{
                width:120,
                height: 120,
                borderRadius: 30,
                backgroundColor: "#fff",
                position: "absolute",
                left: "50%",
                top: "50%",
                margin: "-150px 0 0 30px",
            }}
            animate={{ backgroundColor: "#01ccf5" }}
            transition={{ duration: 0.3, delay:3}}
        />

    </div>
  );
}
