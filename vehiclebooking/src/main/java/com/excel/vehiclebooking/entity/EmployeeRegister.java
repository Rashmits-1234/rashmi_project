//package com.excel.vehiclebooking.entity;
//
//
//
//import java.util.List;
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.Table;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
//@Entity
//@Table(name = "employee")
//public class EmployeeRegister {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer employeeId;
//
//	@Column(nullable = false)
//	private String employeeName;
//
//	@Column(nullable = false)
//	private String employeePassword;
//
//	@Column(nullable = false)
//	private String employeeEmail;
//
//	@Column(nullable = false)
//	private String employeePhoneNumber;
//
//	@Column(nullable = false)
//	private String employeeAddress;
//
//	@Column(nullable = false)
//	private String employeeCity;
//
//	@OneToMany(mappedBy = "employeeRegister", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<ServiceDetails> serviceDetails;
//
//}
