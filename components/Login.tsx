"use client";

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    designation: "",
    email: "",
    phone: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(formData)
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <motion.div variants={inputVariants}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="department">Department</Label>
        <Input id="department" name="department" value={formData.department} onChange={handleChange} required />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="designation">Designation</Label>
        <Input id="designation" name="designation" value={formData.designation} onChange={handleChange} required />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button type="submit" className="w-full">
          Login
        </Button>
      </motion.div>
    </motion.form>
  )
}

