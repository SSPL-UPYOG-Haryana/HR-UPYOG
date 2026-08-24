export interface FinanceModule {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  workflowSteps: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

